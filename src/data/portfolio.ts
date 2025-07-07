import { Project, Experience, Testimonial, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "API Integration", "Chart.js", "CSS3"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    company: "APCFSS (Andhra Pradesh State Cooperative Federation)",
    position: "Software Developer",
    duration: "January 2022 - Present",
    description: "Developing and maintaining web applications for cooperative federation systems. Working on modernizing legacy systems, implementing new features, and ensuring optimal performance for government cooperative services. Collaborating with cross-functional teams to deliver scalable solutions that serve thousands of cooperative members across Andhra Pradesh.",
    technologies: ["React", "JavaScript", "Node.js", "MySQL", "HTML/CSS", "Bootstrap"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Solutions",
    content: "Working with them has been exceptional. Their attention to detail and ability to translate complex requirements into beautiful, functional interfaces is remarkable.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Digital Innovations",
    content: "An outstanding developer who consistently delivers high-quality work on time. Their technical expertise and problem-solving skills have been invaluable to our team.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Design Lead",
    company: "CreativeStudio",
    content: "Exceptional collaboration and implementation skills. They bring designs to life with pixel-perfect precision and always suggest improvements that enhance user experience.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export const skills: Skill[] = [
  { name: "React", category: 'frontend', icon: 'react' },
  // { name: "TypeScript", category: 'frontend', icon: 'typescript' },
  { name: "JavaScript", category: 'frontend', icon: 'javascript' },
  { name: "HTML", category: 'frontend', icon: 'html' },
  { name: "CSS", category: 'frontend', icon: 'css' },
  { name: "Tailwind CSS", category: 'frontend', icon: 'tailwind' },
  // { name: "Next.js", category: 'frontend', icon: 'nextjs' },
  // { name: "Vue.js", category: 'frontend', icon: 'vue' },
  { name: "Node.js", category: 'backend', icon: 'nodejs' },
  // { name: "Express.js", category: 'backend', icon: 'express' },
  { name: "PostgreSQL", category: 'backend', icon: 'postgresql' },
  // { name: "MongoDB", category: 'backend', icon: 'mongodb' },
  // { name: "Python", category: 'backend', icon: 'python' },
  // { name: "GraphQL", category: 'backend', icon: 'graphql' },
  { name: "Git", category: 'tools', icon: 'git' },
  // { name: "Docker", category: 'tools', icon: 'docker' },
  { name: "AWS", category: 'tools', icon: 'aws' },
  { name: "Webpack", category: 'tools', icon: 'webpack' },
  // { name: "Vite", category: 'tools', icon: 'vite' },
  { name: "Figma", category: 'other', icon: 'figma' },
  { name: "Photoshop", category: 'other', icon: 'photoshop' }
];