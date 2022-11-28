import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
    Socks = [{
        name: 'stinky sock',
        description: 'this sock smells like shit',
        pair: false,
        id: 1
    }, {
        name: 'athletic socks',
        description: 'these long socks have a red stripe near the top',
        pair: true,
        id: 2
    }, {
        name: 'duck socks',
        description: "these socks are blue with small embroidered ducks all over them",
        pair: true,
        id: 3
    }]
}

export const dbContext = new DbContext()
