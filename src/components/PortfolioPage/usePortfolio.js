import { useState } from 'react';

const usePortfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A full-featured e-commerce platform built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      category: 'UI/UX Design',
      description: 'Analytics dashboard for social media management',
      technologies: ['React', 'Tailwind CSS', 'Chart.js']
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and user-friendly mobile banking application',
      technologies: ['React Native', 'Redux', 'Firebase']
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'Personal portfolio website with modern design',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion']
    },
    {
      id: 5,
      title: 'Task Management System',
      category: 'Web Application',
      description: 'Project management tool for teams',
      technologies: ['React', 'TypeScript', 'Node.js']
    },
    {
      id: 6,
      title: 'Weather Application',
      category: 'Web Development',
      description: 'Real-time weather forecasting application',
      technologies: ['React', 'Weather API', 'CSS3']
    }
  ];

  return {
    selectedItem,
    setSelectedItem,
    portfolioItems
  };
};

export default usePortfolio;