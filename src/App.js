
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
        <Navbar />
        <section id="home" style={{ height: '100vh', marginTop: '64px' }}>
            <h2>Welcome to My Portfolio</h2>
            <p>This is the home section.</p>
        </section>
        <section id="about" style={{ height: '100vh' }}>
            <h2>About Me</h2>
            <p>This is the about section.</p>
        </section>
        <section id="projects" style={{ height: '100vh', }}>
            <h2>My Projects</h2>
            <p>This is the projects section.</p>
        </section>
    </div>
);
};

export default App;
