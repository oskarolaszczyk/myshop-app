const app = require('./app');

app.set('port', 3000);

const server = app.listen(app.get('port'), () => {
    console.log(`Product service is listening on 
    ${server.address().port}`);
});