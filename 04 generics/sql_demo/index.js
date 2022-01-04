var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (data) {
        console.log('add', data);
        return true;
    };
    MysqlDB.prototype["delete"] = function (id) {
        console.log('delete', id);
        return true;
    };
    MysqlDB.prototype.update = function (data, id) {
        console.log('update', data, id);
        return true;
    };
    MysqlDB.prototype.get = function (id) {
        console.log('get', id);
        return true;
    };
    return MysqlDB;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function (data) {
        console.log('add', data);
        return true;
    };
    MongoDB.prototype["delete"] = function (id) {
        console.log('delete', id);
        return true;
    };
    MongoDB.prototype.update = function (data, id) {
        console.log('update', data, id);
        return true;
    };
    MongoDB.prototype.get = function (id) {
        console.log('get', id);
        return true;
    };
    return MongoDB;
}());
var User = /** @class */ (function () {
    function User(n, age) {
        this.name = n;
        this.age = age;
    }
    return User;
}());
var user = new User('joo', 1);
var mysqlDB = new MysqlDB();
mysqlDB.add(user);
