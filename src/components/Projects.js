import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'NBA Stats Explorer',
      description: 'A React app to explore player stats using NBA API.',
      tech: ['React', 'API', 'CSS'],
    },
    {
      title: 'Fragrance Tracker',
      description: 'Track and tag your fragrance collection.',
      tech: ['React', 'Tailwind', 'LocalStorage'],
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Check out some of the things I’ve built!</p>
    </section>
  );
};

export default Projects