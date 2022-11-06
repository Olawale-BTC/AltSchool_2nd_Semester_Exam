import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Home from './Home.jsx';
import GitHubRepos from './GitHubRepos.jsx';
import GitHubRepo from './GitHubRepo.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './style.css';

function ErrorFallBack({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong!</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

function PageNotFound () {
  return (
    <div>
      <h2>Error 404</h2>
      <p>Seems you took the wrong turn, lets help you find your way</p>
    </div>
  );
}

function UpperLayout () {
  return (
    <div className='App-layout'>
      <nav>
        <NavLink to='Home' className='navlink'> Home</NavLink>{" "}{" "}
        <NavLink to='About' className='navlink'> About</NavLink>{" "}{" "}
        <NavLink to='GitHubRepos' className='navlink'> Repos</NavLink>{" "}{" "}
        <NavLink to='Contact' className='navlink'> Contact</NavLink>{" "}{" "}
      </nav>
    </div>
  );
}

function LowerLayout () {
  return(
    <div className='footer-container'>
      <div>Created by Daramola Olawale</div>
      <div>
        <img src='' alt='LinkedIn' className='footer-img'/>
        <img src='' alt='Twitter' className='footer-img' />
        <img src='' alt='GitHub' className='footer-img' />
      </div>
    </div>
  );
}

function HeadSection () {
  return (
    <div className='app-header'>
      <h1>Hi! I'm <br/> Daramola Olawale </h1>
      <p>I get to share with you my journey into tech stackverse</p>
    </div>
    );
}

export default function App() {
  return (
    <ErrorBoundary FallBackComponent={ ErrorFallBack }>
      <BrowserRouter>
        <div className='App'>
          <UpperLayout />
          <header>
            <HeadSection />
          </header>
          <section>
            <Routes>
            <Route path='/' element={< HeadSection />} />
            <Route path='/Home' element={< Home />} />
            <Route path='/About' element={< About />} />
            <Route path='/GitHubRepos' element={< GitHubRepos />} />
              <Route path=':GitHubRepoID' element={< GitHubRepo />} >
            </Route>
            <Route path='/Contact' element={< Contact />} />
            <Route path='*' element={< PageNotFound />} />
          </Routes>
          </section>

          <footer>
            <LowerLayout />
          </footer>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
