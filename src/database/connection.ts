import { createConnection } from 'mysql2/promise'
import { Sequelize } from 'sequelize'

import { config } from './config'

export const connection = async () => {

    const { user, database, password } = config

    await createConnection(config)

    return new Sequelize(database, user, password, { dialect: 'mysql' })    
}
