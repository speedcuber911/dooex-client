// @flow

import React, { Component } from 'react';

import styles from './SaveButton.scss';

type Props = {
  isSaved: boolean,
  onClick: Function,
};

class SaveButton extends Component<Props> {
  refSpan: HTMLSpanElement;

  handleClick = () => {
    this.refSpan.className = styles.isSaving;

    this.props.onClick();
  };

  render() {
    return (
      <button className={styles.root} onClick={this.handleClick}>
        <span
          className={this.props.isSaved ? styles.saved : styles.notSaved}
          ref={span => (this.refSpan = span)}
        />
      </button>
    );
  }
}

export default SaveButton;
