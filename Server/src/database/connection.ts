import knex from 'knex';
import path from 'path';

const connection = require ('knex')({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});


export default connection;



