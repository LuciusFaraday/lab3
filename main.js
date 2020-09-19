var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Specimen = /** @class */ (function () {
    function Specimen(name, gender, animal) {
        this.name = name;
        this.gender = gender;
        this.animal = animal;
    }
    return Specimen;
}());
var Animal = /** @class */ (function () {
    function Animal(name, photoURL) {
        this.name = name;
        this.photoURL = photoURL;
    }
    return Animal;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this.specimenArray = new Array();
    }
    return Zoo;
}());
var animals = {};
var zoo = new Zoo();
function initializeAnimals() {
    animals["monkey"] = new Animal("monkey", "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/ep_iStock-108177546_16x9.jpg?itok=bekhjZk5");
    animals["donkey"] = new Animal("donkey", "http://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/donkey.jpeg");
}
function fillZoo() {
    zoo.specimenArray.push(new Specimen("Kookoo", Gender.Female, animals["monkey"]));
    zoo.specimenArray.push(new Specimen("Brake", Gender.Male, animals["donkey"]));
}
function showZoo() {
    var zooElement = document.getElementById("zoo");
    zoo.specimenArray.forEach(function (specimenItem) {
        zooElement.innerHTML += "\n\t\t<li>\n\t\t\tName: " + specimenItem.name + ", " + specimenItem.animal.name + "<br>\n\t\t\tGender: " + specimenItem.gender + "<br>\n\t\t\tPhoto: <img src=\"" + specimenItem.animal.photoURL + "\" height=\"500\" width=\"500\">\n\t\t</li>\n\t";
    });
}
function onLoad() {
    initializeAnimals();
    fillZoo();
    showZoo();
}
onLoad();
