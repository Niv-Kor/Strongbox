const HTTP = require('http');
const MSSQL = require('mssql');
const SERVER = HTTP.createServer();
const IO = require('socket.io').listen(SERVER);
const SERVER_PORT = 19200;
const MSG_PREFIX = '>>> '
const ERR_PREFIX = '\n!---ERROR: '
const ERR_SUFFIX = '!---\n'
const DB_CONFIG = {
    server: 'sql5053.site4now.net',
    database: 'DB_A56FAB_strongbox',
    user: 'DB_A56FAB_strongbox_admin',
    password: 'P2413567cu221',
    port: 1433,
    options: {
        encrypt: true,
        enableArithAbort: true
    }
}

/**
 * Log a valid message to the server's console.
 * 
 * @param {String} msg - The message to log
 */
function log(msg) { console.log(MSG_PREFIX + msg); }

/**
 * Log an error message to the server's console.
 * 
 * @param {String} msg - A message about the error
 * @param {Error} err  - The formal error message
 */
function logErr(msg, err) {
    console.error(ERR_PREFIX);
    if (msg) console.error(msg);
    console.error(err);
    console.error(ERR_SUFFIX);
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
    MSSQL.connect(DB_CONFIG)
        .then(() => {
            log('Microsoft SQL Server DB is properly connected.');
            if (error) logErr('Server startup failed.', err);
            else log('Server is listening to port ' + SERVER_PORT + '.');
        })
        .catch(err => logErr('Microsoft SQL Server DB has encountered a problem.', err));
})