const app = require('./app');

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World~~~This is Tanishqa Todo using Flutter ");
});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});