import React from 'react';
import { Alert } from 'antd';
const Notification = (type, message) => {
  
  return (
    <div>
      <Alert type={type} message={message} />
    </div>
  );

 }
export default Notification;