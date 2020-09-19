enum Gender { Male, Female }

class Specimen {
	name: String;
	gender: Gender;
	animal: Animal;

	constructor(name, gender, animal) {
		this.name = name;
		this.gender = gender;
		this.animal = animal;
	}
}

class Animal {
	name: String;
	photoURL: String;
	constructor (name, photoURL) {
		this.name = name;
		this.photoURL = photoURL;
	}
}

class Zoo {
	specimenArray: Array<Specimen>;
	constructor() {
		this.specimenArray = new Array();
	}
}

// -----------------------------------------------------------------------------------------------
let animals: { [id: string]: Animal } = {};
let zoo: Zoo = new Zoo();


function initializeAnimals() {

	animals["monkey"] = new Animal("monkey", "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/ep_iStock-108177546_16x9.jpg?itok=bekhjZk5");
	animals["donkey"] = new Animal("donkey", "http://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/donkey.jpeg");
}

function fillZoo() {

	zoo.specimenArray.push(new Specimen("Kookoo", Gender.Female, animals["monkey"]));
	zoo.specimenArray.push(new Specimen("Brake", Gender.Male, animals["donkey"]));
}

function showZoo() {
	const zooElement: HTMLElement = document.getElementById("zoo");

	zoo.specimenArray.forEach((specimenItem) => {
		zooElement.innerHTML += `
		<li>
			Name: ${specimenItem.name}, ${specimenItem.animal.name}<br>
			Gender: ${specimenItem.gender}<br>
			Photo: <img src="${specimenItem.animal.photoURL}" height="500" width="500">
		</li>
	`
	});
	
}

function onLoad() {
	initializeAnimals();
	fillZoo();
	showZoo();
}

onLoad();