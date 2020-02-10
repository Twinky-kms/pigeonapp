import database from './database';

class accounts {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getObject() {
        return this;
    }

    updateDatabase(obj) {
        database.insertOne(obj, function(err, res) {
            if(err) throw err;
            console.log("docuement inserted.")
            return res;
        })
    }

}

module.exports = accounts;