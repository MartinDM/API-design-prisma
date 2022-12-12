import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('hi')
    res.status(200)
    res.json({message: 'helo'})
})

export default app