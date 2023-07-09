import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SectionHeading from "../common/SectionHeading";
import gsf from "../../assets/gsf-logo.jpeg";
import event1 from "../../assets/event-1.jpeg";
import event2 from "../../assets/event-2.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "../Slider/Slider";

const events = [gsf, event1, event2, gsf];

const Events = () => {
  return (
    <Box className="dark-section" id="Events">
      <ScrollAnimation animateIn="fadeIn">
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8}>
            <SectionHeading
              label="Events"
              heading="Our Latest Events"
              alignCenter={true}
            />
          </Grid>
        </Grid>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Slider slides={events} />
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

export default Events;
