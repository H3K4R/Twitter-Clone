import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({displayName,username,verified,text,image,avatar }){
    return (
      <div className="post">
        <div className="post__avatar">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGkkxYFyJxeqQ/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=UT3-CZN2tbtpj_op7j2tn1HQ_sANYKlA9KkaGlrSxfo" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Swarnava Basu{" "}
                <span className="post__headerSpecial">
                   <VerifiedUserIcon className="post__badge" /> @DevSwarnava
                  
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Greatest of All Time The Cristiano</p>
            </div>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCJbTLlq-FXIRLOITS_9L3NFGZMErVmtWz4w&usqp=CAU" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }


export default Post;