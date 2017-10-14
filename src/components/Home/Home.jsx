import React, { Component } from 'react';
import styles from './Home.scss';
import Doodle from '../Doodle';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div id="row" className={styles.row}>
            <div className="col-12">
              <Doodle />
              <Doodle />
              <Doodle />
              <Doodle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
