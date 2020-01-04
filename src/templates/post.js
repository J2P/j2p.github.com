import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import simpleIcons from 'simple-icons';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Subline from '../components/Subline';
import { media } from '../utils/media';
import { color } from '../utils/color';

import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;

  @media ${media.phone} {
    font-size: 2rem;
  }
`;

const PostContent = styled.div`
  margin-top: 4rem;
  h2 {
    margin-top: 1.6rem;

    @media ${media.phone} {
      font-size: 1.5rem !important;
    }
  }
`;

const PostTitle = styled.div`
  width: 100%;
  padding: 50px 0;
  text-align: center;

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

  svg {
    fill: currentColor;
    width: 200px;

    @media ${media.phone} {
      width: 100px;
    }
  }
`;

const Post = props => {
  const { slug } = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  let className = post.category;
  if (post.category === 'Node.js' || post.category === 'Vue.js') {
    className = post.category.replace('.js', '');
  }
  if (post.category === 'Visual Studio Code') {
    className = post.category.replace(/ /gi, '');
  }
  const icon = simpleIcons[post.category]
    ? (<PostTitle className={className} dangerouslySetInnerHTML={{ __html: simpleIcons[post.category].svg }} />)
    : '';

  return (
    <Layout>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <Header color={className}>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
            <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
          </Subline>
          {icon}
          <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Post;

/* eslint no-undef: off */
export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
      }
      timeToRead
    }
  }
`;
