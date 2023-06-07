import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          <a
            href="#"
            style={{ color: 'orange', textDecoration: 'none' }}
            onMouseEnter={(e) => { e.target.style.color = 'white'; }}
            onMouseLeave={(e) => { e.target.style.color = 'orange'; }}
          >
            Question?. Contact US
          </a>
        </Typography>
        <div
          className="contactList"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            textDecoration: 'underline orange',
            gridGap: '1rem',
            marginBottom: '0.75rem',
            marginTop: '2.5rem',
          }}
        >
          <LinkItem text="FAQ" />
          <LinkItem text="Help Center" />
          <LinkItem text="Account" />
          <LinkItem text="Media Center" />
          <LinkItem text="Investor Relations" />
          <LinkItem text="Jobs" />
          <LinkItem text="Redeem Gift Cards" />
          <LinkItem text="Buy Gift Cards" />
          <LinkItem text="Ways to Watch" />
          <LinkItem text="Terms of Use" />
          <LinkItem text="Privacy" />
          <LinkItem text="Cookie Preferences" />
          <LinkItem text="Corporate Information" />
          <LinkItem text="Contact Us" />
          <LinkItem text="Speed Test" />
          <LinkItem text="Legal Notices" />
          <LinkItem text="Only on Netflix" />
        </div>
      </Container>
    </Box>
  );
}

const LinkItem = ({ text }) => (
  <Typography variant="body1" align="center">
    <a
      href="#"
      style={{ color: 'orange', textDecoration: 'none' }}
      onMouseEnter={(e) => { e.target.style.color = 'white'; }}
      onMouseLeave={(e) => { e.target.style.color = 'orange'; }}
    >
      {text}
    </a>
  </Typography>
);
