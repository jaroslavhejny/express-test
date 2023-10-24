const cron = require('node-cron');

cron.schedule('*/5 * * * * *', async () => {
    
    const number = await fetch('http://localhost:1208/');
    const resp = await number.json();
    console.log(resp);
})