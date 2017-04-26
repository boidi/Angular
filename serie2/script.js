
var testApp = angular.module('app',[]);
testApp.controller('testCtrl', function($scope){
  $scope.firstSentence = 'L\'Axolotl, Ambystoma mexicanum, est une espèce d\'urodèles de la famille des Ambystomatidae.';
 $scope.secondSentence = 'L\'ORNITHORYNQUE (ORNITHORHYNCHUS ANATINUS) EST UN ANIMAL SEMI-AQUATIQUE ENDÉMIQUE DE L\'EST DE L\'AUSTRALIE, Y COMPRIS LA TASMANIE.';
 $scope.title ="ma page test";
 $scope.val= 3.14159265359;
 $scope.mydate ="2017-01-23";
 $scope.article = 'L\'Ornithorynque (Ornithorhynchus anatinus) est un animal semi-aquatique endémique de l\'est de l\'Australie, y compris la Tasmanie. C\'est l\'une des cinq espèces de l\'ordre des monotrèmes, seul ordre de mammifères qui pond des œufs au lieu de donner naissance à des petits complètement formés (les quatre autres espèces sont des échidnés). C\'est la seule espèce actuelle de la famille des Ornithorhynchidae et du genre Ornithorhynchus bien qu\'un grand nombre de fragments d\'espèces fossiles de cette famille et de ce genre aient été découverts. L\'apparence fantasmagorique de ce mammifère pondant des œufs, à la mâchoire cornée ressemblant au bec d\'un canard, à queue évoquant un castor, qui lui sert à la fois de gouvernail dans l\'eau et de réserve de graisse, et à pattes de loutre a fortement surpris les premiers explorateurs qui l\'ont découvert ; bon nombre de naturalistes européens ont cru à une plaisanterie. C\'est l\'un des rares mammifères venimeux : le mâle porte sur les pattes postérieures un aiguillon qui peut libérer du venin capable de paralyser une jambe humaine ou même de tuer un chien. Les traits originaux de l\'ornithorynque en font un sujet d\'études important pour mieux comprendre l\'évolution des espèces animales et en ont fait un des symboles de l\'Australie : il a été utilisé comme mascotte pour de nombreux événements nationaux et il figure au verso de la pièce de monnaie de 20 cents australiens. Jusqu\'au début du XXe siècle, il a été chassé pour sa fourrure mais il est protégé à l\'heure actuelle. Bien que les programmes de reproduction en captivité aient eu un succès très limité et qu\'il soit sensible aux effets de la pollution, l\'espèce n\'est pas considérée comme en danger.';
});
testApp.controller('phonesCtrl', function($scope) {
  $scope.test ='ma page test';
    $scope.phones = [
        {'phoneModel': 'G7',  'brand': 'LG'},
        {'phoneModel': 'Galaxy S7 Edge', 'brand': 'Samsung'},
        {'phoneModel': 'iPhone7',  'brand': 'Apple'},
        {'phoneModel': '50b Helium 4G', 'brand': 'Archos'},
        {'phoneModel': 'One A9', 'brand': 'HTC'},
        {'phoneModel': '8', 'brand': 'Nokia'},
        {'phoneModel': 'Zenphone 2',  'brand': 'Asus'}
   ];
 });
