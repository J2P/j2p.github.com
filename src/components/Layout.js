/* eslint no-unused-expressions:0 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import SEO from '../components/SEO';
import theme from '../../config/Theme';
import { media } from '../utils/media';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.dark};
    text-decoration: none;
    transition: all ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  h2 {
    font-size: 2.5rem !important;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
`;

const Layout = props => {
  const { children } = props;
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              buildTime
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <SEO />
            {children}
            <Footer>Copyright © J2P All Rights Reserved.</Footer>
          </React.Fragment>
        </ThemeProvider>
      )}
    />
  );
};

export default Layout;
