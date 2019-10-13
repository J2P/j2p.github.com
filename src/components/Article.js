import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import simpleIcons from 'simple-icons';
import Subline from './Subline';
import { media } from '../utils/media';
import { color } from '../utils/color';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  border: 1px solid #ccc;

  &.ESLint {
    border: 1px solid ${color.ESLint};
  }

  &.React {
    border: 1px solid ${color.React};
  }

  &.CSS3 {
    border: 1px solid ${color.CSS3};
  }

  &.Webpack {
    border: 1px solid ${color.Webpack};
  }

  &.Sass {
    border: 1px solid ${color.Sass};
  }

  &.Rust {
    border: 1px solid ${color.Rust};
  }

  &.JavaScript {
    border: 1px solid ${color.JavaScript};
  }

  &.Git {
    border: 1px solid ${color.Git};
  }

  &.Django {
    border: 1px solid ${color.Django};
  }

  &.Java {
    border: 1px solid ${color.Java};
  }

  &.Node {
    border: 1px solid ${color.Node};
  }

  &.Vue {
    border: 1px solid ${color.Vue};
  }

  &.Gatsby {
    border: 1px solid ${color.Gatsby};
  }

  &.VisualStudioCode {
    border: 1px solid ${color.VisualStudioCode};
  }

  &.Elasticsearch {
    border: 1px solid ${color.Elasticsearch};
  }

  &.PostgreSQL {
    border: 1px solid ${color.PostgreSQL};
  }

  &.Python {
    border: 1px solid ${color.Python};
  }

  &.Blender {
    border: 1px solid ${color.Blender};
  }

  &.Go {
    border: 1px solid ${color.Go};
  }

  &.Disqus {
    border: 1px solid ${color.Disqus};
  }

  &.Deno {
    border: 1px solid ${color.Deno};
  }

  &.Jest {
    border: 1px solid ${color.Jest};
  }

  &.Terraform {
    border: 1px solid ${color.Terraform};
  }
`;

const Title = styled.h2`
  text-align: center;

  @media ${media.phone} {
    font-size: 1.5rem !important;
  }
`;

const Initiale = styled.div`
  padding: 1rem 0;

  background-color: #ccc;

  a {
    color: #fff;
  }

  &.ESLint {
    background-color: ${color.ESLint};
  }

  &.React {
    background-color: ${color.React};
  }

  &.CSS3 {
    background-color: ${color.CSS3};
  }

  &.Webpack {
    background-color: ${color.Webpack};
  }

  &.Sass {
    background-color: ${color.Sass};
  }

  &.Rust {
    background-color: ${color.Rust};
  }

  &.JavaScript {
    background-color: ${color.JavaScript};
  }

  &.Git {
    background-color: ${color.Git};
  }

  &.Django {
    background-color: ${color.Django};
  }

  &.Java {
    background-color: ${color.Java};
  }

  &.Node {
    background-color: ${color.Node};
  }

  &.Vue {
    background-color: ${color.Vue};
  }

  &.Gatsby {
    background-color: ${color.Gatsby};
  }

  &.VisualStudioCode {
    background-color: ${color.VisualStudioCode};
  }

  &.Elasticsearch {
    background-color: ${color.Elasticsearch};
  }

  &.PostgreSQL {
    background-color: ${color.PostgreSQL};
  }

  &.Python {
    background-color: ${color.Python};
  }

  &.Blender {
    background-color: ${color.Blender};
  }

  &.Go {
    background-color: ${color.Go};
  }

  &.Disqus {
    background-color: ${color.Disqus};
  }

  &.Deno {
    background-color: ${color.Deno};
  }

  &.Jest {
    background-color: ${color.Jest};
  }

  &.Terraform {
    background-color: ${color.Terraform};
  }

  svg {
    fill: currentColor;
  }
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin: 1rem 0;
`;

const PostTitle = styled.div`
  width: 100px;
  margin: 0 auto;

  @media ${media.phone} {
    width: 50px;
  }

  &.ESLint {
    background-color: ${color.ESLint};
    color: #fff;
  }

  &.React {
    background-color: ${color.React};
    color: #fff;
  }

  &.CSS3 {
    background-color: ${color.CSS3};
    color: #fff;
  }

  &.Webpack {
    background-color: ${color.Webpack};
    color: #fff;
  }

  &.Sass {
    background-color: ${color.Sass};
    color: #fff;
  }

  &.Rust {
    background-color: ${color.Rust};
    color: #fff;
  }

  &.JavaScript {
    background-color: ${color.JavaScript};
    color: #fff;
  }

  &.Git {
    background-color: ${color.Git};
    color: #fff;
  }

  &.Django {
    background-color: ${color.Django};
    color: #fff;
  }

  &.Java {
    background-color: ${color.Java};
    color: #fff;
  }

  &.Node {
    background-color: ${color.Node};
    color: #fff;
  }

  &.Vue {
    background-color: ${color.Vue};
    color: #fff;
  }

  &.Gatsby {
    background-color: ${color.Gatsby};
    color: #fff;
  }

  &.VisualStudioCode {
    background-color: ${color.VisualStudioCode};
    color: #fff;
  }

  &.Elasticsearch {
    background-color: ${color.Elasticsearch};
    color: #fff;
  }

  &.PostgreSQL {
    background-color: ${color.PostgreSQL};
    color: #fff;
  }

  &.Python {
    background-color: ${color.Python};
    color: #fff;
  }

  &.Blender {
    background-color: ${color.Blender};
    color: #fff;
  }

  &.Go {
    background-color: ${color.Go};
    color: #fff;
  }

  &.Disqus {
    background-color: ${color.Disqus};
    color: #fff;
  }

  &.Deno {
    background-color: ${color.Deno};
    color: #fff;
  }

  &.Jest {
    background-color: ${color.Jest};
    color: #fff;
  }

  &.Terraform {
    background-color: ${color.Terraform};
    color: #fff;
  }
`;

const Content = styled.div`
  padding: 0 1rem;
`;


const Article = ({ title, date, excerpt, slug, timeToRead, category }) => {
  let className = category;
  if (category === 'Node.js' || category === 'Vue.js') {
    className = category.replace('.js', '');
  }
  if (category === 'Visual Studio Code') {
    className = category.replace(/ /gi, '');
  }
  const icon = simpleIcons[category]
    ? (<PostTitle className={className} dangerouslySetInnerHTML={{ __html: simpleIcons[category].svg }} />)
    : '';

  return (
    <Post className={'article', className}>
      <Title className="article-title">
        <Initiale className={className}>
          {icon}
          <Link to={slug}>{title}</Link>
        </Initiale>
      </Title>
      <Content>
        <Subline>
          {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
          <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
        </Subline>
        <Excerpt>{excerpt}</Excerpt>
      </Content>
    </Post>
  );
};

export default Article;
