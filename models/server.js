const express = require('express');
const router = require('../routes/spells')
require('dotenv').config();

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.setRoutes();
    }

    setRoutes(){
        this.app.use('/api/spellbook', router);
    }

    middlewares(){

        //Directorio publico
        this.app.use(express.static('public'));
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('App running in ' + this.port)
        })
    }
}

module.exports = Server;