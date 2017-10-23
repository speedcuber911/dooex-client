// @flow

import type { Location, RouterHistory } from 'react-router';

import type { Doodle } from 'modules/types';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoTable from 'components/InfoTable';

import styles from './InfoModal.css';

type Props = {
  doodle: Doodle,
  history: RouterHistory,
  isModal: boolean,
  location: Location,
};

class InfoModal extends Component<Props> {
  static defaultProps = {
    Doodle: null,
    isModal: true,
  };

  close = () => {
    if (this.props.isModal) {
      this.props.history.goBack();
      return;
    }

    this.props.history.push({
      ...this.props.location,
      pathname: this.props.location.pathname.replace(/info\/.*$/, ''),
    });
  };

  render() {
    const { doodle } = this.props;

    if (doodle === undefined) {
      return null;
    }

    return (
      <div className={styles.root}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <a href={`https://www.google.com/doodles/${doodle.name}`} target="_blank">
                  {doodle.title}

                  <small className={styles.externalLink} />
                </a>
              </h5>

              <button className="close" onClick={this.close}>
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <InfoTable doodle={doodle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { doodleId } = ownProps.match.params;

  return {
    doodle: state.doodles.find(doodle => doodle.id === doodleId),
  };
}

export default connect(mapStateToProps)(InfoModal);
