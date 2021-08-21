import '../../App.css';
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Other from './Other.js';

function Body() {
  return (
    <div className="body">
      <About/>
      <Experience/>
      <Projects/>
      <Other/>
    </div>
  );
}

export default Body;