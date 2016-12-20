(function() {
    function Room($firebaseArray){
        console.log("Testing room service")
        
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        return {
        all: rooms 
        };
    }
    angular
        .module('Bloc-Chat')
        .factory('Room', ['$firebaseArray', Room]);
})();