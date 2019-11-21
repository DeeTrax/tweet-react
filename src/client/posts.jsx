import React from 'react';
import ReactDOM from 'react-dom';
import Linkify from 'react-linkify';

class Posts extends React.Component {

     render() {
    return (
      <div>
        <p>
        {this.props.name}
        </p>


        <span>
            <img src = {this.props.img}/>
            <p><Linkify>{this.props.text}</Linkify></p>
            <p>Retweeted:{this.props.retweet}</p>
            <p>Favorited:{this.props.favorite}</p>

        </span>

      </div>

    );
  }
}

export default Posts;