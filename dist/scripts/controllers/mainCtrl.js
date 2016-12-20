(function(){
    function mainCtrl(Room) {
        console.log("Testing main control");
        this.chatWindowTitle = "Welcome to Bloc Chat!";
        this.rooms = Room.all;
    }
    angular
        .module('Bloc-Chat')
        .controller('mainCtrl', ['Room', mainCtrl]);
})();