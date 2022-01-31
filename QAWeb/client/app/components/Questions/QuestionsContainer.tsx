import * as React from 'react';
import {
  Button,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {QuestionsActions} from "./store/questions.actions";
import {Topic} from "../../shared/interfaces";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarBorder from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import { Edit } from "@material-ui/icons";
import history from '../../history';
import { ApplicationState } from '../../store/application-state';

interface TopicsProps {
  deleteTopic: Function,
  likeTopic: Function,
  onLoad: Function
  topics: Topic[],
  isLoading: boolean
}

export class QuestionsContainer extends React.Component<TopicsProps, {}> {

  componentWillMount() {
    console.log('loading...');
    this.props.onLoad();
  }

  deleteTopic(id) {
    this.props.deleteTopic(id);
  }

  editTopic(id) {
    history.push(`/createTopic/${id}`);
  }

  likeTopic(id) {
    this.props.likeTopic(id);
  }

  render() {
    const { topics } = this.props;

    const tableContent = topics.length === 0
      ?
        !this.props.isLoading && <TableRow key={10000} style={{height: 340}}>
          <TableCell style={{fontStyle: 'italic', color: '#DADCDF', position: 'relative', left: 'calc(50% - 70px)'}}>
            No active topics
          </TableCell>
        </TableRow>
      : topics.map(topic => {

        return (
          <TableRow key={topic.id}>
            <TableCell>
              <Link to={`/topics/${topic.id}`}>{topic.title}</Link>
            </TableCell>
            <TableCell>
              {topic.userName}
            </TableCell>
            <TableCell style={{padding: '0 0 0 80px'}}>
              <div onClick={() => this.editTopic(topic.id)} style={{cursor: 'pointer'}}>
                <Edit/>
              </div>
            </TableCell>
            <TableCell>
              <div onClick={() => this.deleteTopic(topic.id)} style={{cursor: 'pointer'}}>
                <DeleteForeverIcon/>
              </div>
            </TableCell>
          </TableRow>
        );
      });

    return(
      <div>
        <Link to='/createTopic'>
          <Button variant='contained' style={{marginLeft: 24, marginTop: 24}}>
              Create question
          </Button>
        </Link>

        <Paper>
          {this.props.isLoading && <LinearProgress/>}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{width: '60%'}}>Title</TableCell>
                <TableCell>Username</TableCell>
                <TableCell style={{width: 25}}/>
                <TableCell style={{width: 25}}/>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableContent}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    topics: state.topics.topics,
    isLoading: state.topics.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(QuestionsActions.loadTopicsStarted());
    },
    deleteTopic: (id: number) => {
      dispatch(QuestionsActions.deleteTopic(id));
    },
    likeTopic: (id: number) => {
      dispatch(QuestionsActions.likeTopic(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
