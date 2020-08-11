import {Request, Response, response} from 'express'
import db from '../database/connection'

export default class ConnectionsController
{
    async create(request: Request, reponse: Response)
    {
        const {user_id} = request.body;

        await db('connections').insert({user_id, });

        return response.status(201).send();
    }

    async index(request: Request, reponse: Response)
    {
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections[0];

        return response.json({total});
    }

}