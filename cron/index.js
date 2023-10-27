const cron = require('node-cron');

const getNumber = async () => {
    
    const max = 0;
    const number = await fetch(`http://localhost:1208/${max}`);
    const resp = await number.json();
    console.log(resp, max);

    if (resp > 50){
        console.log('> 50')
        task.stop();
    };
    max++;
}

const task = cron.schedule('*/2 * * * * *', getNumber)

