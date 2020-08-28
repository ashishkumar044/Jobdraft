import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import themeFile from './util/theme'
import jwtDecode from 'jwt-decode'
import AuthRouteJobseeker from './util/AuthRouteJobseeker'
import AuthRouteRecruiter from './util/AuthRouteRecruiter'
import axios from 'axios'

//MUI imports
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

//Redux imports
import { Provider } from 'react-redux'
import store from './redux/store'
import { SET_AUTHENTICATED } from './redux/types'
import { logoutJobseeker, getJobseekerData } from './redux/actions/jobseekerActions'
import { logoutRecruiter, getRecruiterData } from './redux/actions/recruiterActions'


//Pages imports
import home from './pages/home'
import recruiterLogin from './pages/recruiter/recruiterLogin'
import recruiterSignup from './pages/recruiter/recruiterSignup'
import recruiterHome from './pages/recruiter/recruiterHome'
import jobseekerLogin from './pages/jobseeker/jobseekerLogin'
import jobseekerSignup from './pages/jobseeker/jobseekerSignup'
import jobseekerHome from './pages/jobseeker/jobseekerHome'
import skills from './pages/jobseeker/skills'
import recruiterJobs from './pages/recruiter/recruiterJobs'
import newJob from './pages/recruiter/newJob'
import jobPosts from './pages/jobseeker/jobPosts'
import jobDetails from './pages/recruiter/jobDetails'
import feedbackFormJ from './pages/jobseeker/feedbackFormJ'
import feedbackFormR from './pages/recruiter/feedbackFormR'
import applicantDetails from './pages/recruiter/applicantDetails'
import community from './pages/community'
import about from './pages/about'

import python from './pages/skillTest/python'
import project2 from './pages/projects/project2'
import project3 from './pages/projects/project3'

//Creating custom Mui theme
const theme = createMuiTheme(themeFile)

axios.defaults.baseURL = 'https://asia-east2-get-job-520e3.cloudfunctions.net/api'

//Jobseeker Authorization
const tokenj = localStorage.FBIdTokenJ
if(tokenj){
  const decodedToken = jwtDecode(tokenj)
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutJobseeker())
    window.location.href = "/j/signin"
  } else {
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common['Authorization'] = tokenj
    store.dispatch(getJobseekerData())
  }
}

//Recruiter Authorization
const tokenr = localStorage.FBIdTokenR
if(tokenr){
  const decodedToken = jwtDecode(tokenr)
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutRecruiter())
    window.location.href = "/r/signin"
  } else {
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common['Authorization'] = tokenr
    store.dispatch(getRecruiterData())
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home}/>
              <Route exact path="/community" component={community}/>
              <Route exact path="/about" component={about}/>
              <AuthRouteJobseeker exact path="/j/signin" component={jobseekerLogin}/>
              <AuthRouteJobseeker exact path="/j/signup" component={jobseekerSignup}/>
              <Route exact path="/j/home" component={jobseekerHome}/>
              <Route exact path="/j/jobs" component={jobPosts}/>
              <Route exact path="/j/addSkills" component={skills}/>
              <Route exact path="/j/feedback" component={feedbackFormJ}/>
              <AuthRouteRecruiter exact path="/r/signin" component={recruiterLogin}/>
              <AuthRouteRecruiter exact path="/r/signup" component={recruiterSignup}/>
              <Route exact path="/r/home" component={recruiterHome} />
              <Route exact path="/r/newJob" component={newJob} />
              <Route exact path="/r/jobs/:email" component={recruiterJobs} />
              <Route exact path="/r/job/:jobId" component={jobDetails} />
              <Route exact path="/r/job/application/:email" component={applicantDetails} />
              <Route exact path="/r/feedback" component={feedbackFormR}/>

              <Route exact path="/skillTest/python" component={python}/>
              <Route exact path="/project/2" component={project2}/>
              <Route exact path="/project/3" component={project3}/>
              {/* <Route exact path="/project/4" component={project4}/> */}
              {/* <Route exact path="/project/5" component={project5}/> */}
            </Switch>
          </div>
        </Router>
      </Provider>
      </MuiThemeProvider>
  );
}

export default App;
