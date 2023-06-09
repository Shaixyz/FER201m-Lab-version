import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import useTheme from "@mui/material/styles/useTheme";

function Sidebar(props) {
  const theme = useTheme()
  const { archives, description, title } = props;
//For the What is ReactFlix, Category in News
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{
        p: 2, bgcolor: `${theme.palette.mode === "dark" ? "#000" : "#e3e1e1"}`, color: `${theme.palette.mode === "dark" ? "white" : "black"}`
      }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h4" gutterBottom sx={{ mt: 5 }}>
        Category
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))} 
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;