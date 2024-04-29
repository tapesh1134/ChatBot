import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '28f04b15-9428-4901-b539-9466e85ffe31',
        clientId: '28f04b15-9428-4901-b539-9466e85ffe31',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
        messagingUrl: 'https://messaging.botpress.cloud',
        botName: 'CSED Project',
        containerWidth: '100%25',
        layoutWidth: '100%25',
        hideWidget: true,
        disableAnimations: false,
        enableConversationDeletion: true,
        composerPlaceholder: 'Chat with CSED Project',
        botConversationDescription: 'Group 6',
        webhookId: 'd675e2c7-da2d-43ee-840b-4a1b2b52a263',
        lazySocket: true,
        theme: '',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Skull-Icon.svg/900px-Skull-Icon.svg.png',
        themeColor: '#cccccc',
      });

      window.botpressWebChat.onEvent(
        function () {
          window.botpressWebChat.sendEvent({ type: 'show' });
        },
        ['LIFECYCLE.LOADED']
      );
    };
  }, []);

  return (
    <div>
      {/* Your React component JSX goes here */}
    </div>
  );
};

export default Chatbot;
