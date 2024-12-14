import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../App.css';
import { Link } from 'react-router-dom';
//created by Digvijay Singh
const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Box className="about-us-container">
      <Typography
        variant="h4"
        component="h1"
        className="about-us-heading animate fade-in"
      >
        About Us
      </Typography>
      <Box className="about-us-content animate slide-in-left">
        <img
          src="/images/todo-list.png"
          alt="Teamwork"
          className="about-us-image"
        />
        <Typography variant="body1" className="about-us-text">
          Welcome to our To-Do List application! Our mission is to help you stay
          organized and productive. Whether you're managing work, school, or
          personal tasks, our app provides an easy way to track, prioritize, and
          complete your goals.
        </Typography>
      </Box>
      <Box className="about-us-content reverse animate slide-in-right">
        <img
          src="/images/task-management.jpg"
          alt="Task Management"
          className="about-us-image"
        />
        <Typography variant="body1" className="about-us-text">
          Our app features a user-friendly interface designed to help you focus
          on what matters most. You can create tasks, set deadlines, and
          categorize your to-dos for better management. It's perfect for
          individuals and teams alike.
        </Typography>
      </Box>
      <Box className="about-us-content animate slide-in-left">
        <img
          src="/images/productivity.png"
          alt="Productivity"
          className="about-us-image"
        />
        <Typography variant="body1" className="about-us-text">
          Built with modern technology, our application is fast, secure, and
          accessible from anywhere. Join thousands of users who rely on our app
          to simplify their lives and turn their to-dos into dones.
        </Typography>
      </Box>
      <Typography variant="body1" className="about-us-footer animate fade-in">
        Thank you for choosing our Swift List app.<br></br>
        <Link to="/todo" className="todo-link">
          Let’s get things done together!
        </Link>
      </Typography>
    </Box>
  );
};

export default AboutUs;
