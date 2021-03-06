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
import { getClassName, getIconCategory } from '../utils';

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
  background-color: ${props => color[props.icon] || '#ccc'};

  svg {
    fill: #ffffff;
    width: 200px;

    @media ${media.phone} {
      width: 50px;
    }
  }
`;

const Post = props => {
  const { slug } = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  const { category } = post;
  const className = getClassName(category);
  const iconCategory = getIconCategory(category);

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
            <Link to={`/categories/${kebabCase(iconCategory)}`}>{iconCategory}</Link>
          </Subline>
          <PostTitle
            className={className}
            icon={className}
            dangerouslySetInnerHTML={{ __html: simpleIcons[iconCategory].svg }}
          />
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
        date(formatString: "YYYY.MM.DD")
        category
      }
      timeToRead
    }
  }
`;
