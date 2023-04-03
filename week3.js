angular.module('presentieApp', [])

    .controller('PresentieLijstController', function () {
       var presentieLijst = this;

       presentieLijst.personen = [
           {naam: 'Pietje Puk', gezien:true},
           {naam: 'Karel Kok', gezien:false}
       ];

       presentieLijst.voegToe = function(){
           presentieLijst.personen.push({naam:presentieLijst.persoonNaam, gezien:false});
           presentieLijst.persoonNaam = '';
       }

       presentieLijst.aantalAfwezigen = function () {
           var teller = 0;
           angular.forEach(presentieLijst.personen, function (persoon) {
               teller += persoon.gezien ? 0 : 1;
           });
           return teller;
       };

    });