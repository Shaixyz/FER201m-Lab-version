import Timeline from "@mui/lab/Timeline";
import React from "react";
import TimelineCard from "../components/TimelineCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Typography sx={{ textAlign: "center", marginTop: "2rem" }} variant="h3">
        <span style={{ color: 'red' }}>The story of ReactFlix</span>
      </Typography>
      <Timeline
        sx={
          isMobile
            ? {
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }
            : {}
        }
        position={isMobile ? "right" : "alternate"}
      >
        <TimelineCard
          pLeft={1}
          pRight={8}
          title="Building Our Internal Studios"
          date="1997"
          image="https://vnreview.vn/image/21/17/84/2117845.jpg"
          imageAlt="Building Our Internal Studios"
          body1="Reed Hastings and Marc Randolph have an idea to rent DVDs by mail."
          body2="They test the concept by mailing themselves a DVD."
          body3="The DVD arrives intact, and the idea for ReactFlix is born."

        />
        <TimelineCard
          pLeft={1}
          pRight={8}
          title="Continuing Our Movies Journey"
          date="2003"
          image="https://beebom.com/wp-content/uploads/2022/04/30-best-award-winning-movies.jpg"
          imageAlt="Continuing Our Movies Journey"
          body1="ReactFlix is issued a patent by the U.S. Patent & Trademark Office to cover its subscription rental services as membership surpasses 1 million."
          body2="A personalized movie recommendation system is introduced, using members’ ratings on past titles to accurately predict future choices."
          body3="ReactFlix.com, the first DVD rental and sales site, is launched."
        />
        <TimelineCard
          pLeft={1}
          pRight={8}
          title="New on ReactFlix"
          date="2010"
          image="https://emphatichands.files.wordpress.com/2013/08/netflix.jpg"
          imageAlt="New on ReactFlix "
          body1="The Profiles feature launches, allowing members to create different lists for different users and/or different moods."
          body2="Membership grows to 5 million."
          body3="Streaming is introduced, allowing members to instantly watch series and films."
        />
        <TimelineCard
          pLeft={1}
          pRight={8}
          title="Our Latest Film & Series Diversity Study"
          date="2015"
          image="https://www.guidingtech.com/wp-content/uploads/how_to_access_your_watching_list_on_Netflix_-_PC_and_Mobile.jpg"
          imageAlt="Our Latest Film & Series Diversity Study "
          body1="ReactFlix partners with consumer electronics brands to allow streaming on Xbox 360, Blu-ray players and TV set-top boxes."
          body2="After nearly three years and 40,000 submissions, the $1 million ReactFlix Prize is awarded to the team Bellkor's Pragmatic Chaos for improving the accuracy of recommendations by 10%."
          body3="Streaming partnerships expand to internet connected TVs as membership surpasses 10 million. "
        />

        <TimelineCard
          pLeft={1}
          pRight={8}
          title="Featured News"
          date="2023"
          image="https://y2mate.ch/uploads/images/16487242317055596-img.jpeg"
          imageAlt="Featured News"
          body1="ReactFlix launches in Latin America and the Caribbean. "
          body2="The first ReactFlix button appears on remote controls."
          body3="Membership reaches 25 million members, and expands into the United Kingdom, Ireland and the Nordic Countries. "
        />
      </Timeline>
    </Box>
  );
};

export default About;
