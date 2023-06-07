import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { Typography, Link, Box } from '@mui/material';

const Markdown = ({ children }) => {
  const options = {
    overrides: {
      Typography: {
        component: Typography,
        props: { variantMapping: { p: 'p', h1: 'h4', h2: 'h6', h3: 'subtitle1', h4: 'caption' } },
      },
      Link: { component: Link },
      Box: { component: Box },
      li: { component: Box, props: { component: 'li', sx: { mt: 1, typography: 'body1' } } },
    },
  };

  return <ReactMarkdown options={options}>{children}</ReactMarkdown>;
};

export default Markdown;
