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
  border-radius: 25px;
  overflow: hidden;
  border: none;
  box-shadow: 0 5px 50px ${props => color[props.icon] || 'rgba(0, 0, 0, 0.3)'};

  @media ${media.phone} {
    border-radius: 35px;
  }
`;

const Title = styled.h2`
  text-align: center;

  @media ${media.phone} {
    font-size: 1.5rem !important;
  }
`;

const Initiale = styled.div`
  padding: 1rem;
  background-color: ${props => color[props.icon] || '#ccc'};

  a {
    color: #fff;
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
  background-color: ${props => color[props.icon]};
  color: #fff;

  @media ${media.phone} {
    width: 50px;
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
  const icon = simpleIcons[category] ? (
    <PostTitle className={className} icon={className} dangerouslySetInnerHTML={{ __html: simpleIcons[category].svg }} />
  ) : (
    ''
  );

  return (
    <Post className={('article', className)} icon={className}>
      <Title className="article-title">
        <Initiale icon={className}>
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
