import express from 'express';
import DataBase from './db/DataBase';
import router from './router'

class App{
    public express: express.Application;
     constructor(){
       this.express = express()
       this.midway()
       this.db()
       this.router()
    }
    private midway(): void{
        this.express.use(express.json())
    }
    private router(): void{
        this.express.use('/', router)
    }
    private db(): void{
        DataBase.connect()
    }
}

export default new App().express