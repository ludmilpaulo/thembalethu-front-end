import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const FacebookChat: React.FC = () => {
  useEffect(() => {
    // Load the Facebook SDK script and initialize the Chat Plugin
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        id="fb-customer-chat"
        className="fb-customerchat"
        // Replace with your page_id
      
        // Use type assertion to avoid TypeScript error
     
      />
    </>
  );
};

export default FacebookChat;
