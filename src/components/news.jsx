import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import { Button } from 'antd';
import '../scss/libraries/_button.scss';

import '../scss/widgets/_news.scss';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleNewsBody = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { id, date, header, anons, text } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="news">
        <h4>{ date }</h4>
        <h3>{ id }. { header }</h3>
        <p>{ anons }</p>
        { !isOpen ?
          <Button
            type="link"
            onClick={this.toggleNewsBody}
          >
            See more
          </Button> :
          <Fragment>
            {text.map((item, index) => {
              return <p key={ index }>{ item }</p>
            })}
            <Button
              type="link"
              onClick={this.toggleNewsBody}
            >
              Close
            </Button>
          </Fragment>}
      </div>
    );
  }
};

News.propTypes = {
  date: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  anons: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
};

export default News;
