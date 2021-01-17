import { DataTypes, Sequelize } from 'sequelize'

export const student = (sequelize: Sequelize) => sequelize.define('students', {
        first_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        second_name: {
            type: DataTypes.TEXT,
            allowNull: false
        }     
    })
