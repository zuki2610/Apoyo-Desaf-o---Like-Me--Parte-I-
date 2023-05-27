const app = require('./app');
const port = 3001;
const db = require('./config/db');


db.pool.connect((err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conectado a la base de datos');
        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en la url: localhost:3001');
        });        
    }
});
