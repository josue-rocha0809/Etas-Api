import express, { Application } from 'express';
import userRoutes from '../routes/usersRoute';
import authRoutes from '../routes/auth';
import etasRoutes from '../routes/etasRoute'
import cors from 'cors';

import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/users',
        auth: '/api/auth',
        etas:'/api/etas',
        payments:'/api/payments'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error(error);
        }

    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
        this.app.use(this.apiPaths.auth, authRoutes)
        this.app.use(this.apiPaths.etas, etasRoutes)
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

}

export default Server;