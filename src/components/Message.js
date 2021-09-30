import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem;

  > img {
    height: 3rem;
    border-radius: 8px;
    border: solid black 1px;
    display: flex;
    align-items: flex-start;
  }
`;

const MessageInfo = styled.div`
  padding-left: 0.5rem;

  > h4 {
    > span {
      color: gray;
      font-weight: 300;
      margin-left: 0.25rem;
      font-size: 0.625rem;
    }
  }
`;
