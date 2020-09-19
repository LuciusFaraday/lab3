"use strict";
export const __esModule = true;
const _Specimen = exports.Gender = void 0;
export { _Specimen as Specimen };
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender = _Gender || (exports.Gender = {}));
var Specimen = /** @class */ (function () {
    function Specimen(name, gender, animal) {
        this.name = name;
        this.gender = gender;
        this.animal = animal;
    }
    return Specimen;
}());
const _Specimen = Specimen;
export { _Specimen as Specimen };
