import React, { useState } from "react";
import "./Post.css";
import { Avatar, IconButton } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
  // likes
  // comments
  // retweets
  // timestamp
}) {


  const [likeCount, setLikecount] = useState(0)

  const addLike = () => {
    setLikecount(likeCount + 1)
  }

  return (
    <div className="post">
      {/* Display Name and username */}
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />}
                {`@` + username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <IconButton>
            <ChatBubbleOutlineIcon className="footer__icon" fontSize="small" />
          </IconButton>

          <IconButton>
            <RepeatIcon className="footer__icon" fontSize="small" />
          </IconButton>

          <IconButton onClick={addLike} fontSize="smaller">
            <FavoriteBorderIcon className="footer__favIcon" fontSize="smaller" />
            {likeCount}
          </IconButton>

          <IconButton>
            <PublishIcon className="footer__icon" fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
