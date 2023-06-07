import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const TimelineCard = (props) => {
  const isImageOnLeft = props.position === "left";
//For context's content  of About
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card
          sx={{
            display: "flex",
            flexDirection: isImageOnLeft ? "row" : "row-reverse",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              flex: "1 1 50%",
              order: isImageOnLeft ? 0 : 2,
              paddingLeft: isImageOnLeft ? props.pLeft : 0,
              paddingRight: isImageOnLeft ? 0 : props.pRight,
              textAlign: isImageOnLeft ? "right" : "left",
            }}
          >
            <Typography sx={{ my: 1 }} variant="h6">
              {props.title}
            </Typography>
            <Typography sx={{ my: 1 }} variant="subtitle2">
              {props.date}
            </Typography>
            <Typography sx={{ my: 1 }} variant="body1">
              {props.body1}
            </Typography>
            <br />
            <Typography sx={{ my: 1 }} variant="body1">
              {props.body2}
            </Typography>
            <br />
            <Typography sx={{ my: 1 }} variant="body1">
              {props.body3}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              flex: "1 1 50%",
              order: isImageOnLeft ? 2 : 0,
              paddingLeft: isImageOnLeft ? 0 : props.pLeft,
              paddingRight: isImageOnLeft ? props.pRight : 0,
              textAlign: isImageOnLeft ? "left" : "right",
            }}
          >
            <img
              src={props.image}
              alt={props.imageAlt}
              style={{ width: "200%", maxWidth: "500px" }}
            />
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>   
  );
};

export default TimelineCard;
