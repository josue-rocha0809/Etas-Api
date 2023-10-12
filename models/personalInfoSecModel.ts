import { DataTypes } from 'sequelize';
import db from '../db/connection';

const PersonalInfoSec = db.define('personalinfosec', {

    eta_id: {
        type: DataTypes.INTEGER,
    },
    fullName: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.STRING
    },
    cityOfBirth: {
        type: DataTypes.STRING
    },
    countryOfBirth: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    isCompleted: {
        type: DataTypes.BOOLEAN
    }
},{
    tableName: 'personalinfosec'
  });


export default PersonalInfoSec;

// id int AI PK 
// id_eta int 
// fullName text 
// birthDate text 
// cityOfBirth text 
// countryOfBirth text 
// email text 
// phone text 
// isCompleted tinyint(1) 
// gender_id int