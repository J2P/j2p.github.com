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
  flex-direction: row;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  overflow: hidden;
  border-top: 1px solid ${props => color[props.icon] || '#ccc'};
`;

const Title = styled.h2`
  text-align: left;
  padding: 1rem;
  font-size: 1.6rem !important;

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
    width: 100px;
    height: 100px;
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
      <Initiale icon={className}>{icon}</Initiale>
      <div>
        <Title className="article-title">
          <Link to={slug}>{title}</Link>
        </Title>
        <Content>
          <Subline>
            {date} &mdash; {timeToRead} Min Read &mdash; In{' '}
            <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
          </Subline>
          <Excerpt>{excerpt}</Excerpt>
        </Content>
      </div>
    </Post>
  );
};

export default Article;
