import './index.css';
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
      <div className="App">      
      <Nav />
      <div className="container-fluid main-body">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 my-header">
            <h3>Engineer | Developer | Creator</h3>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 home-list-content">
            <p className="lead myleadnote"><i className="bi bi-info-circle">{' '}</i>Site is currently under construction</p>
            
            <p className="my-inline">Welcome to my page.</p>  
            <p className="my-inline">
              Hi, I am Sergio. I am a fulltime project manager at a medical device company. 
              I began my career as a systems engineer and hardware developer many years ago. 
              During the pandemic in 2020, I decided to learn and refine my skills in software and web development.
              Learning various languages, frameworks, and technologies, I felt that I should share what I've learned to get feedback from the community to become a better developer.
            </p>
            <p>
              On this site, I will be posting various projects.
              Some of these projects will have been completed as part of a course or lesson (Udemy, Youtube, etc.) and will provide a link to those lessons for those who are curious.
              Other projects will be my own ideas or thoughts where I will include any background or insight whenever possible, however a good application should be self explanatory.
            </p>
            <p>
              Please feel free to provide feedback, tips and other useful comments to help improve my coding and development.
              If you would like to connect, fill out my contact me form or visit my GitHub or LinkedIn profile.
            </p>
            <p>
              This page will be updated sporadically with new ideas, links, and projects to display my work. 
            </p>
              <br/>
              <br/>
              <p className="lead myleadnote"><em>Navigation items are intentionally disabled as content is added.</em></p>
            
          </div>
          <div className="col-sm-2"></div>
        </div>
        </div>
        <Footer />

      </div>

  );
}

export default App;
