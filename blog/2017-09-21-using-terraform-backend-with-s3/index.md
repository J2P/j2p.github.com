---
title: "Terraform 리모트 스테이트 백엔드로 AWS S3 사용하기"
date: "2017-09-21"
layout: post
draft: false
path: "/posts/using-terraform-backend-with-s3"
category: "Terraform"
tags: 
  - "Terraform"
description: ""  
---

## configuration.tf 파일 생성

```hcl
terraform {
  # terraform 버전
  required_version = "= 0.9.5"
}

provider "aws" {
  # aws 도쿄 리전
  region  = "ap-northeast-1"
}
```

`configuration.tf` 파일을 생성해서 terraform 기본 버전 설정값과 provider 설정값을 위와 같이 추가 해준다.

## Terraform Init 명령으로 초기화 하기

```bash
$ terraform init

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your environment. If you forget, other
commands will detect it and remind you to do so if necessary.
```

`init` 명령을 실행해서 디렉토리를 테라폼을 사용할 수 있도록 초기화 한다.

0.9.x 버전에서는 `provide`가 terraform 바이너리에 포함되어 있어서 0.10.x 버전과 `init`이 다르다.

> 현재 최신버전은 0.10.6 이다. 다음 포스트에서 backend 를 사용하면서 버전 업데이트 하는걸 하기 위해서 지금은 0.9.x 버전 기준으로 작성했다.

## Backend S3 관련 리소스 추가

```hcl
# terraform remote state를 lock table 위한 dynamodb_table
resource "aws_dynamodb_table" "test_terraform_lock" {
  name           = "init-terraform-lock"
  read_capacity  = 2
  write_capacity = 2
  hash_key       = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}

# terraform remote state를 위한 s3_bucket
resource "aws_s3_bucket" "test_terraform_state" {
  bucket = "test-terraform-state"
  acl    = "private"

  versioning {
    enabled = true
  }
}
```

위와 같이 `remote.tf`을 생성한다.

`aws_dynamodb_tabl` 리소스는 table lock 을 위해서 추가하고 `aws_s3_bucke` 리소스는 tfstate 파일 저장을 위해서 추가 한다.

> dynamodb 테이블의 primary key 이름은 LockID 로 해야 한다.
> [dynamodb_table](https://www.terraform.io/docs/backends/types/s3.html#dynamodb_table)

## Terrafom Plan 명령으로 변경되는 리소스 확인

```bash
$ terraform plan
Refreshing Terraform state in-memory prior to plan...
The refreshed state will be used to calculate this plan, but will not be
persisted to local or remote state storage.

The Terraform execution plan has been generated and is shown below.
Resources are shown in alphabetical order for quick scanning. Green resources
will be created (or destroyed and then created if an existing resource
exists), yellow resources are being changed in-place, and red resources
will be destroyed. Cyan entries are data sources to be read.

Note: You didn't specify an "-out" parameter to save this plan, so when
"apply" is called, Terraform can't guarantee this is what will execute.

+ aws_dynamodb_table.init_terraform_lock
    arn:                       "<computed>"
    attribute.#:               "1"
    attribute.2068930648.name: "LockID"
    attribute.2068930648.type: "S"
    hash_key:                  "LockID"
    name:                      "init-terraform-lock"
    read_capacity:             "2"
    stream_arn:                "<computed>"
    stream_enabled:            "<computed>"
    stream_view_type:          "<computed>"
    write_capacity:            "2"

+ aws_s3_bucket.init_terraform_state
    acceleration_status:     "<computed>"
    acl:                     "private"
    arn:                     "<computed>"
    bucket:                  "init-terraform-state"
    bucket_domain_name:      "<computed>"
    force_destroy:           "false"
    hosted_zone_id:          "<computed>"
    region:                  "<computed>"
    request_payer:           "<computed>"
    versioning.#:            "1"
    versioning.0.enabled:    "true"
    versioning.0.mfa_delete: "false"
    website_domain:          "<computed>"
    website_endpoint:        "<computed>"

Plan: 2 to add, 0 to change, 0 to destroy.
```

리소스를 실제로 추가 하기전에 `plan` 명령으로 어떤것들이 변화가 있는지 확인한다.

위와 같이 `aws_dynamodb_table`, `aws_s3_bucke` 리소스가 추가 되는걸 확인할 수 있다.

## Terrafom apply 명령으로 리소스 AWS 에 적용

```bash
$ terraform apply
aws_s3_bucket.init_terraform_state: Creating...
  acceleration_status:     "" => "<computed>"
  acl:                     "" => "private"
  arn:                     "" => "<computed>"
  bucket:                  "" => "init-terraform-state"
  bucket_domain_name:      "" => "<computed>"
  force_destroy:           "" => "false"
  hosted_zone_id:          "" => "<computed>"
  region:                  "" => "<computed>"
  request_payer:           "" => "<computed>"
  versioning.#:            "" => "1"
  versioning.0.enabled:    "" => "true"
  versioning.0.mfa_delete: "" => "false"
  website_domain:          "" => "<computed>"
  website_endpoint:        "" => "<computed>"
aws_dynamodb_table.init_terraform_lock: Creating...
  arn:                       "" => "<computed>"
  attribute.#:               "" => "1"
  attribute.2068930648.name: "" => "LockID"
  attribute.2068930648.type: "" => "S"
  hash_key:                  "" => "LockID"
  name:                      "" => "init-terraform-lock"
  read_capacity:             "" => "2"
  stream_arn:                "" => "<computed>"
  stream_enabled:            "" => "<computed>"
  stream_view_type:          "" => "<computed>"
  write_capacity:            "" => "2"
aws_dynamodb_table.init_terraform_lock: Creation complete (ID: init-terraform-lock)
aws_s3_bucket.init_terraform_state: Creation complete (ID: init-terraform-state)

Apply complete! Resources: 2 added, 0 changed, 0 destroyed.

The state of your infrastructure has been saved to the path
below. This state is required to modify and destroy your
infrastructure, so keep it safe. To inspect the complete state
use the `terraform show` command.

State path:
```

`apply` 명령으로 `aws`에 적용을 한다.

`apply` 하고 나면 dynamodb 와 s3 bucket 이 생성된걸 확인 할 수 있다.
이제 backend s3 를 쓰기 위한 준비는 끝났다.

## configuration.tf 파일 수정

```hcl
terraform {
  required_version = "= 0.9.5"

  # 아래 부분 추가
  backend "s3" {
    # s3 bucket 이름
    bucket     = "test-terraform-state"
    # 실제 저장될 파일 이름
    key        = "terraform.tfstate"
    # s3 bucket 리전
    region     = "ap-northeast-1"
    # s3 서버 암화호 사용 여부
    encrypt    = true
    # dynamodb table 이름
    lock_table = "test-terraform-lock"
  }
}

provider "aws" {
  region = "ap-northeast-1"
}
```

위와 같이 `backend` s3 로 추가해 준다.

> Configuration variables
> [Backend Type: s3 - Terraform by HashiCorp](https://www.terraform.io/docs/backends/types/s3.html#configuration-variables)
>
> 서버 측 암호화는 저장된 데이터를 보호하기 위한 것입니다. Amazon S3 가 관리하는 암호화 키(SSE-S3)를 사용하는 서버 측 암호화는 강력한 멀티 팩터 암호화를 제공합니다. Amazon S3 는 각 객체를 고유한 키로 암호화합니다. 또한 추가 보안 조치로 주기적으로 바뀌는 마스터 키를 사용하여 키 자체를 암호화합니다. Amazon S3 서버 측 암호화는 가장 강력한 블록 암호 중 하나인 256 비트 Advanced Encryption Standard(AES-256)를 사용하여 데이터를 암호화합니다.

## Terraform Plan 명령으로 확인하기

```bash
$ terraform plan
Backend reinitialization required. Please run "terraform init".
Reason: Initial configuration of the requested backend "s3"

The "backend" is the interface that Terraform uses to store state,
perform operations, etc. If this message is showing up, it means that the
Terraform configuration you're using is using a custom configuration for
the Terraform backend.

Changes to backend configurations require reinitialization. This allows
Terraform to setup the new configuration, copy existing state, etc. This is
only done during "terraform init". Please run that command now then try again.

If the change reason above is incorrect, please verify your configuration
hasn't changed and try again. At this point, no changes to your existing
configuration or state have been made.

Failed to load backend: Initialization required. Please see the error message above.
```

`plan`을 하게 되면 위와 같이 backend 가 변경되어서 `init`을 다시 하라고 나온다.

## Terraform Init 명령으로 초기화 다시하기

```bash
$ terraform init
Initializing the backend...
Do you want to copy state from "local" to "s3"?
  Pre-existing state was found in "local" while migrating to "s3". No existing
  state was found in "s3". Do you want to copy the state from "local" to
  "s3"? Enter "yes" to copy and "no" to start with an empty state.

  Enter a value: yes

Releasing state lock. This may take a few moments...


Successfully configured the backend "s3"! Terraform will automatically
use this backend unless the backend configuration changes.

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your environment. If you forget, other
commands will detect it and remind you to do so if necessary.
```

위와 같이 `init`을 다시 하면 `local`에 있는 `tfstate` 파일을 s3 로 복사 할지 물어본다. `yes` 하면 s3 로 복사가 된다.

이제 terraform backend s3 설정이 끝났다.
