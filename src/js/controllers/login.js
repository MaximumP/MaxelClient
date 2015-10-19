/**
 * Created by max on 19.10.15.
 */

angular.module('Maxel')
    .controller('LoginController', function(){
        this.me = test;
        this.ssh = loginDetails;
        this. login = function(){
            console.log(this.ssh);
        }
    });

var loginDetails = {
    host: '',
    user: '',
    password: ''
};

var test = {
    name: 'Max',
    surName: 'Schumann'
};