import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import CurrentFocus from '../sections/CurrentFocus/CurrentFocus';
import Projects from '../sections/Projects/Projects';
import Blog from '../sections/Blog/Blog';
import Contact from '../sections/Contact/Contact';
import profileData from '../../data/profile.json';
import projectsData from '../../data/projects.json';
import blogData from '../../data/blog.json';

const HomePage = () => {
  return (
    <>
      <Hero profile={profileData} />
      <About profile={profileData} />
      <CurrentFocus profile={profileData} />
      <Projects projects={projectsData} />
      <Blog blog={blogData} />
      <Contact profile={profileData} />
    </>
  );
};

export default HomePage;
