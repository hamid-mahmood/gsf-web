import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SectionHeading from "../common/SectionHeading";
import Image from "../../assets/about-banner.jpeg";
import CardMedia from "../common/CardMedia";
import MosqueIcon from "@mui/icons-material/Mosque";
import ScrollAnimation from "react-animate-on-scroll";

const aboutMeDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Sed pellentesque dui nulla, vel tincidunt enim lobortis eget.
  Etiam ut consectetur libero, at scelerisque sem. Nulla dapibus ultricies lacus, a lacinia nulla feugiat non`;

const cardMediaData = [
  {
    title: "Lorem ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dui nulla, vel tincidunt enim lobortis eget. Etiam ut consectetur libero, at scelerisque sem. Nulla dapibus ultricies lacus, a lacinia nulla feugiat non. Maecenas ipsum ligula, semper id sagittis id, aliquam ut nisi. Praesent mattis suscipit dui, vitae mollis sapien. Vivamus eu augue ornare, faucibus tortor et, congue nisl. Quisque et dolor felis.`,
    icon: <MosqueIcon />,
  },
  {
    title: "Lorem ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque dui nulla, vel tincidunt enim lobortis eget. Etiam ut consectetur libero, at scelerisque sem. Nulla dapibus ultricies lacus, a lacinia nulla feugiat non. Maecenas ipsum ligula, semper id sagittis id, aliquam ut nisi. Praesent mattis suscipit dui, vitae mollis sapien. Vivamus eu augue ornare, faucibus tortor et, congue nisl. Quisque et dolor felis. `,
    icon: <MosqueIcon />,
  },
];

const AboutUs = () => {
  return (
    <Box className="section" id="About">
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <Grid container spacing={2}>
            {/* sm = 960 */}
            <Grid item xs={5} sm={5}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <img src={Image} alt="about us" className="responsive-img" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <SectionHeading
                label="About Us"
                heading="Lorem ipsum dolor sit amet"
                description={aboutMeDesc}
              />
              <br />
              <Box>
                {cardMediaData.map((item, index) => (
                  <CardMedia
                    key={index}
                    label={item.title}
                    desc={item.description}
                    icon={item.icon}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

export default AboutUs;
