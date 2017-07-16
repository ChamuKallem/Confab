(function(){
    function userAuthCtrl(roomService, $scope, $state){
        const auth = firebase.auth();
        
        this.btnLoginClick = function(email, pass,user){
            this.currentUser = user;
            auth.signInWithEmailAndPassword(email, pass).catch(function(error){
                alert(error.message);
            }); 
        }
        
        this.btnSignUpClick = function(email, pass, user){
            this.currentUser = user;
            auth.createUserWithEmailAndPassword(email, pass).catch(function(error){
                console.log(error.message);
            }); 
          
        }
        
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                firebaseUser.updateProfile({
                    displayName: this.currentUser
                });
                if (this.currentUser ==null && firebaseUser.displayName) 
                    this.currentUser = firebaseUser.displayName;
                
                if (this.currentUser){
                    this.updateUserInFB = roomService.updateUserInFB(this.currentUser);
                    this.hasUser = true;
                    $state.go('main')
                    console.log(firebaseUser);
                }
            } else {
                this.hasUser = false;
                console.log('not logged in');
            } 
        });
    }
    angular
        .module('Bloc-Chat')
        .controller('userAuthCtrl', [ 'roomService', '$scope' , '$state', userAuthCtrl])
})();