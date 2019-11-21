import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';
import Posts from 'posts';

class App extends React.Component {
  render() {
    let showTweets = tweets.map(tweet => {
      return (
      <div>
      <Posts  name = {tweet.user.name}
              text = {tweet.text}
              img = {tweet.user.profile_image_url_https}
              retweet = {tweet.retweet_count}
              favorite = {tweet.favorite_count}
      />

      </div>
      )
  });

  return (
    <div>
      {showTweets}
    </div>
  );
}
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");