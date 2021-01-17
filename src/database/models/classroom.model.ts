import { DataTypes, Sequelize } from 'sequelize'

export const classroom = (sequelize: Sequelize) => sequelize.define('classrooms', {
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        roominess: {
            type: DataTypes.INTEGER,
            allowNull: false
        }     
    })
