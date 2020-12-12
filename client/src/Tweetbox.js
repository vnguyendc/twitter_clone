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
      avatar: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p320x320/120134165_3937554602939469_9113452377263565864_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=DPVls_D_4a8AX-YjG7G&_nc_ht=scontent-lax3-1.xx&tp=6&oh=e329e9d8b36177099e50b4e1e7d55f45&oe=5FF91D9E",
      timestamp: ""
    })

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p320x320/120134165_3937554602939469_9113452377263565864_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=DPVls_D_4a8AX-YjG7G&_nc_ht=scontent-lax3-1.xx&tp=6&oh=e329e9d8b36177099e50b4e1e7d55f45&oe=5FF91D9E" />
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
