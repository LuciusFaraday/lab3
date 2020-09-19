import { Animal } from "./Animal";

export enum Gender { Male, Female }

export class Specimen {
	name: String;
	gender: Gender;
	animal: Animal;

	constructor(name, gender, animal) {
		this.name = name;
		this.gender = gender;
		this.animal = animal;
	}
}