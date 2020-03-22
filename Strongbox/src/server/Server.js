const HTTP = require('http');
const MSSQL = require('mssql');
const SERVER = HTTP.createServer();
const IO = require('socket.io').listen(SERVER);
const SERVER_PORT = 19200;
const DB_CONFIG = {
    server: 'localhost',
    database: '',
    user: '',
    password: '',
    port: 1434
}

function runQuery(query) {
    //connect to the mssql db
    MSSQL.connect(DB_CONFIG).then(() => {
        var req = new MSSQL.Request();

        //apply query
        req.query(query).then(res => {
            MSSQL.close();
            return res.recordset;
        })
        .catch(err => console.error('SQL Query Error [' + query + ']: ' + err));
    })
    .catch(err => console.error('MSSQL Connection Error: ' + err));
}

//configure GET requests
IO.on('connection', socket => {
    socket.emit('get_data', {
        
    });

    socket.on('update', item => {
        
    });
});

SERVER.listen(SERVER_PORT, function(error) {
    if (error) console.log('Server Startup Error: ' + err);
    else console.log('Server is listening to port ' + SERVER_PORT);
})