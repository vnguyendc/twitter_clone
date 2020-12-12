import React, { useState } from 'react'
import "./Tweetbox.css"
import { Avatar, Button } from "@material-ui/core"
import db from './firebase'

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Vinh Nguyen',
      username: 'vinhthekid',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
      timestamp: ""
    })

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="" />
          <input
          onChange={e => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?"
          type="text"></input>
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox
