import React from "react";

const Notification = ({ notification }) => {
  if (notification.message === null) {
    return null;
  } else {
    return (
      <div className="message" style={{ color: notification.color }}>
        {notification.message}
      </div>
    );
  }
};

export default Notification;
