import * as React from 'react';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component<{}, {}> {

  render() {

    return (
      <div style={{marginTop: '4%', marginLeft: '29%'}}>
        <img src={'https://www.lifewire.com/thmb/OO7CD06NAdoIwv71DgUgBiTd4ps=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg'}/>
        <div style={{marginLeft: '25%', fontSize: 23, marginTop: 8}}>Back to <Link to='topics'><u>homePage</u></Link>?</div>
      </div>
    );
  }
}
