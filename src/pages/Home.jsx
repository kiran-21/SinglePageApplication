import React from "react";
import Box from "@mui/material/Box";
import { Typography, Container, Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import homeImage from "../Images/todoist.png";
import "../css/home.css";
import testimonialbg from "../Images/testimonialbg.png";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";

const Home = () => {
  const templates = [
    {
      title: "Accounting Tasks",
      description:
        "Create a system to keep your books, receipts, and invoices organized.",
      image: "../Images/img1.png",
    },
    {
      title: "Business Travel Packing",
      description:
        "Never forget your laptop charger, lucky shoes, or passport again.",
      image: { img2 },
    },
    {
      title: "Client Management",
      image: { img3 },
      description:
        "Organize your work with clients from the smallest to the largest details.",
    },
    {
      title: "Deep Work",
      image: { img4 },
      description:
        "Practice prioritizing focus and eliminating distraction with this template.",
    },
    {
      title: "Meeting Agenda",
      image: { img4 },
      description:
        "Waste less time in meetings, ensuring they're efficient and action-oriented.",
    },
    {
      title: "Client Management",
      image: { img3 },
      description:
        "Organize your work with clients from the smallest to the largest details.",
    }
  ];
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            {/* Text on the left */}
            <Grid item xs={12} md={6} sx={{ textAlign: "start" }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Organize your work and life, finally.
              </Typography>
              <Typography variant="body1">
                Simplify life for both you and your team with the world’s #1
                task manager and to-do list app.
              </Typography>
              <Typography>374K+ ★★★★★ reviews</Typography>
              {/* <Typography>
                <button className="btn btn-dark px-4">Start For Free</button>
              </Typography> */}
            </Grid>
            {/* Image on the right */}
            <Grid item xs={12} md={6}>
              <img
                component="img"
                src={homeImage}
                alt="To Do List"
                className="homeImage"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box className="testimonials-container">
        <Grid container spacing={4} className="testimonials-grid">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="testimonial-text">
              "Simple, straightforward, and super powerful"
            </Typography>
            <Typography className="testimonial-source">- The Verge</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="testimonial-text">
              "The best to-do list app on the market"
            </Typography>
            <Typography className="testimonial-source">- PC Mag</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="testimonial-text">
              "Nothing short of stellar"
            </Typography>
            <Typography className="testimonial-source">- TechRadar</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className="container">
        <Typography variant="h4" className="header">
          Kickstart your next project with Todoist
        </Typography>
        <Typography className="subheader">
          No need to create projects or setups from scratch when we have 50+
          examples made for you.
        </Typography>
        <Box className="category-buttons">
          {[
            "Work",
            "Personal",
            "Education",
            "Management",
            "Marketing & Sales",
            "Customer Support",
          ].map((category) => (
            <Button
              key={category}
              variant="contained"
              className="category-button"
            >
              {category}
            </Button>
          ))}
        </Box>
        <Grid container spacing={1} className="template-grid">
          {templates.map((template, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              key={index}
              className="template-card"
            >
              <Box className="template-content">
                {/* <img src={template.image} alt="To Do List" /> */}
                <Typography variant="h6" className="template-title">
                  {template.title}
                </Typography>
                <Typography className="template-description">
                  {template.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* <Button variant="text" className="see-all-button">
          See all
        </Button> */}
      </Box>
      <Box className='container-review'>
      <Typography variant="h4" className="headline">
        Gain calmness and clarity with the world’s most beloved productivity app
      </Typography>
      <Typography variant="body2" className="reviews">
        374000+ ★★★★★ reviews on Google Play and App Store
      </Typography>
      {/* <Button variant="contained" className="ctaButton">
        Start for free
      </Button> */}
      {/* <Typography variant="body2" className="download">
        Download apps
      </Typography> */}
    </Box>
    </>
  );
};
export default Home;
