import * as React from 'react';
import {connect} from "react-redux";
import {QuestionActions} from "./store/question.actions";
import { ApplicationState } from '../../store/application-state';
import { MatchProps, Topic } from '../../shared/interfaces';
import { Button, CircularProgress, Paper, TableCell, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface TopicProps {
  topic: Topic,
  isLoading: boolean,
  match: MatchProps,
  onLoad: Function,
  addComment: Function,
  deleteComment: Function,
}

interface TopicState {
  comment: string;
  score: number;
}

export class QuestionContainer extends React.Component<TopicProps, TopicState> {

  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      score: 1
    }
  }

  componentWillMount() {
    this.props.onLoad(this.props.match.params.id);
  }

  addComment = () => {
    this.props.addComment(this.props.topic.id, this.state.comment, this.state.score);
  };

  handleScoreChange = (event) => {
    this.setState({
      ...this.state,
      score: parseInt(event.target.value)
    })
  };

  changeComment = (event) => {
    this.setState({
      ...this.state,
      comment: event.target.value
    })
  };

  deleteComment = (commentId) => {
    this.props.deleteComment(commentId);
  };

  componentWillReceiveProps() {
    this.setState({
      score: 1,
      comment: ''
    });
  }

  render() {
    const { topic } = this.props;

    const comments = topic.answers && topic.answers.map(comment => (
      <Paper key={comment.id} style={{width: 'calc(54% + 10px)', margin: 24, marginLeft: '23%', overflowX: 'auto'}}>
        <div style={{padding: 24, wordBreak: 'break-word'}}>
          <b>{comment.user.username}</b> (Score: <b>{comment.score}/10</b>)
            <div style={{display: 'flex'}}>
              <div style={{marginTop: 8}}>
                {comment.content}
              </div>
              <div onClick={() => this.deleteComment(comment.id)} style={{cursor: 'pointer', marginLeft: '54%', marginTop: -8, position: 'absolute', display: 'flex'}}>
                <DeleteForeverIcon/>
              </div>
            </div>
        </div>
      </Paper>
    ));

    return(
      <div style={{marginBottom: '10%'}}>
        <div style={{marginLeft: '23%'}}>
        <h1>{topic && topic.title}</h1>

          {this.props.topic.content && (<Paper style={{width: 'calc(70% - 10px)', overflowX: 'auto', marginTop: 16, padding: 10}}>
            <div>
              {this.props.topic.content}
            </div>
          </Paper>)}


        <ValidatorForm onSubmit={(event) => {
          event.preventDefault();
          return this.addComment()
        }}>

          <TextValidator
            id="standard-textarea"
            label="Comment"
            name="comment"
            value={this.state.comment}
            onChange={this.changeComment}
            style={{width: 'calc(70% + 12px)'}}
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            validators={['required']}
            errorMessages={['This field is required']}
            variant="outlined"
            multiline
          />

          <div style={{display: 'flex', flexDirection: 'column', width: 120}}>
            <FormControl style={{minWidth: 120, margin: '12px 0'}}>
              <InputLabel htmlFor="age-simple">Score</InputLabel>
              <Select
                value={this.state.score}
                onChange={this.handleScoreChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                {
                  Array.from(Array(10).keys())
                    .map(idx => {
                      return (
                        <MenuItem value={idx + 1} key={idx}>{idx + 1}</MenuItem>
                      );
                    })
                }
              </Select>
            </FormControl>
            <Button type="submit" variant='contained'>
              Submit
            </Button>
          </div>

        </ValidatorForm>

        </div>

        <div>
          {comments}

          {this.props.isLoading && <CircularProgress style={{marginLeft: '48%', marginTop: 24}}/>}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    topic: state.topic.topic,
    isLoading: state.topic.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: (id) => {
      dispatch(QuestionActions.loadTopicStart(id));
    },
    addComment: (topicId, comment, score) => {
      dispatch(QuestionActions.addCommentStart(topicId, comment, score));
    },
    deleteComment: (commentId) => {
      dispatch(QuestionActions.deleteComment(commentId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
