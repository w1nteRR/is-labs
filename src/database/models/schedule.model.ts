import { DataTypes, Sequelize } from 'sequelize'

export const schedule = (sequelize: Sequelize) => sequelize.define('schedule', {
        day_: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        subject: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        time: {
            type: DataTypes.TEXT,
            allowNull: false
        }     
    })
