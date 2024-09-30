
const axios = require('axios');

const discordUrl = 'https://discord.com/api/webhooks/1290395617977172082/88ogjElnbb34KU0cO00Eqqx4uS-pCbe2WHGUd3D3_Mz7A2_L-7VLTmAovtjV4HJu3pIa';
const notificationText = 'Hello, this is a simple discord notification from Javascript';

async function main(mesg) {

  await sendDiscordMessage(mesg, discordUrl);
}

async function sendDiscordMessage(mesg, webhookUrl) { 
  const response = await axios({
    url: webhookUrl,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({"username": "dibs439", "content": mesg}),
    responseType: 'json',
  });
    
}

main(notificationText);
