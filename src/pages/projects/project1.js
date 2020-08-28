import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import JNavbar from '../../components/jobseeker/JNavbar'
import {Test1Data} from './Test1Data'

// MUI imports
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

// Redux imports
import { connect } from 'react-redux'
import { postProject } from '../../redux/actions/jobseekerActions'

const styles = {
    card: {
        // maxWidth: '80%',
        margin: '30px',
        padding: '40px',
        position: 'relative',
        textAlign: 'left'
    },
    headerCard: {
      textAlign: 'center',
    },
    titleHeader: {
      fontWeight: '600',
      fontSize: '2.3rem'
    },
    invisibleSeparator: {
        width: '100%',
        border: 'none',
        marginBottom: '20px'
    },
    questionCount: {
      fontWeight: 'bold',    
    },
    nextButton: {
      left: '33%',
      margin: '10px'
    },
    finishButton: {
      left: '37%',
      margin: '10px'
    },
    previousButton: {
      left: '40%',
      margin: '10px'
    },
    scoreCard: {
      margin: '30px',
      padding: '40px',
      position: 'relative',
      textAlign: 'left'
    },
    submitButton: {
      // position: 'absolute',
      margin: '30px 10px',
    }
}

class project1 extends Component {
  state = {
    skillName: 'Python',
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    endTest: false,
    score: 0,
    disabled: true
  }

  loadTest = () => {
    const {currentQuestion} = this.state
    this.setState(() => {
        return {
            questions: Test1Data[currentQuestion].question,
            options: Test1Data[currentQuestion].options,
            answers: Test1Data[currentQuestion].answer
        }
    })
}

componentDidMount() {
  this.loadTest()
}

componentWillReceiveProps(nextProps) {
  if (nextProps.UI.errors) {
    this.setState({ errors: nextProps.UI.errors })
  }
  if (!nextProps.UI.errors && !nextProps.UI.loading) {
    this.setState({ score: '', skillName: '' })
  }
}

handleNext = () => {
  const {userAnswer, answers, score} = this.state
  this.setState({
      currentQuestion: this.state.currentQuestion + 1
  })
  //incrementing scores if answer is correct
  if(userAnswer === answers){
      this.setState({
          score: score + 1
      })
  }
}
handlePrevious = () => {
  this.setState({
      currentQuestion: this.state.currentQuestion - 1
  })
}
//Updates the component
componentDidUpdate(prevProps, prevState) {
  const {currentQuestion} = this.state
  if(this.state.currentQuestion !== prevState.currentQuestion){
      this.setState(() => {
          return{
              disabled: false,
              questions: Test1Data[currentQuestion].question,
              options: Test1Data[currentQuestion].options,
              answers: Test1Data[currentQuestion].answer
          }
      })
  } 
}

//Check Answer
checkAnswer = answer => {
  this.setState({
      userAnswer: answer,
      disabled: false
  })
}
handleFinish = () => {
  const {userAnswer, answers, score} = this.state
  // if(this.state.currentQuestion === Test1Data.length - 1){
      this.setState({
          endTest: true
      })
  // }
  if(userAnswer === answers){
    this.setState({
        score: score + 1
    })
}
}


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
      this.props.postProject(
          { skillName: this.state.skillName, score: this.state.score }, this.props.history)
  }

  render() {
    const { classes, authenticated } = this.props
    const { questions, options, currentQuestion, endTest, score } = this.state

    if(endTest && score >= 3){
      return(
        <Fragment>
          <JNavbar/>
            <Grid container>
              <Grid item sm/>
              <Grid item sm={10} xs={12}>
                <Card elevation={1} className={classes.scoreCard}>
                  <CardContent>
                      <form onSubmit={this.handleSubmit}>
                      <h3>Well Done!! You scored {this.state.score}.</h3>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submitButton}
                            >
                                Submit score
                            </Button>
                      </form>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm/>
            </Grid>
        </Fragment>
            
      )
  }
  else if(endTest && score < 3){
    return(
          <Fragment>
          <JNavbar/>
          <Grid container>
            <Grid item sm/>
            <Grid item lg={10} sm={10} xs={12}>
                <Card elevation={1} className={classes.scoreCard}>
                  <CardContent>
                    <h3> You scored {this.state.score}. Please try again later.</h3>
                          <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              className={classes.button}
                              component={Link}
                              to={'/j/home'}
                          >
                              Try again
                          </Button>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item sm/>
          </Grid>
          </Fragment>
          
    )
} 

//Page header
    const headerMarkup = (
      <Fragment>
        <Card elevation={0} className={classes.headerCard}>
          <CardContent>
          <Typography variant="h4" className={classes.titleHeader}>Python</Typography>
          </CardContent>
        </Card>
      </Fragment>
    )

    //Questions and options
    const projectFormMarkup = authenticated ? (
        <Fragment>
        <JNavbar/>
        <Grid container>
            <Grid item sm/>
            <Grid item lg={10} sm={10} xs={12} >
                <Card elevation={1} className={classes.card}>
                  {headerMarkup}
                  <CardContent>
                      <Typography variant="body1" className={classes.questionCount}>
                        {`Questions ${currentQuestion} of ${Test1Data.length - 1}`}
                      </Typography>
                        <h3>{questions}</h3>
                      {options.map(option => (
                        <li>
                        <Button 
                          color="primary" 
                          key={option.id} 
                          onClick={() => this.checkAnswer(option)}
                          >
                            {option}
                          </Button>
                        </li>
                      ))}
                      {currentQuestion < Test1Data.length - 1 &&
                          <Fragment>
                              <Button 
                                color="primary" 
                                variant="contained" 
                                onClick={this.handleNext}
                                className={classes.nextButton}
                                >
                                  Next
                              </Button>
                              <Button 
                                color="secondary" 
                                variant="contained" 
                                onClick={this.handleFinish} 
                                disabled={this.state.disabled}
                                className={classes.finishButton}
                                >
                                  Finish
                              </Button>
                          </Fragment> 
                      }
                      {currentQuestion === Test1Data.length - 1 &&
                              <Button 
                                color="secondary" 
                                variant="contained" 
                                onClick={this.handleFinish}
                                className={classes.finishButton}
                                >
                                  Finish
                              </Button>
                      }
                      {currentQuestion !== 0 && 
                              <Button 
                                color="primary" 
                                variant="contained" 
                                onClick={this.handlePrevious} 
                                disabled={this.state.disabled}
                                className={classes.previousButton}
                                >
                                  Previous
                              </Button>
                    }
                    <hr className={classes.invisibleSeparator} />
                  </CardContent>
                </Card>
            </Grid>
            <Grid item sm/>
        </Grid>
        </Fragment>
    ) : null

    return projectFormMarkup;
  }
}

project1.propTypes = {
  postProject: propTypes.func.isRequired,
  UI: propTypes.object.isRequired,
  classes: propTypes.object.isRequired,
  jobseeker: propTypes.object.isRequired,
  authenticated: propTypes.bool.isRequired
};
const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.jobseeker.authenticated
})

export default connect(mapStateToProps, { postProject })(withStyles(styles)(project1))