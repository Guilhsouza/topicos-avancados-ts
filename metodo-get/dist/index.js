"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createCountryCard(country) {
    var _a;
    const card = document.createElement('div');
    card.classList.add('country');
    const countryName = country.name.common;
    const name = document.createElement('h2');
    name.textContent = countryName;
    const flag = document.createElement('img');
    flag.src = country.flags.svg;
    flag.alt = countryName;
    card.append(name, flag);
    (_a = document.getElementById('countries')) === null || _a === void 0 ? void 0 : _a.append(card);
}
function getCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://restcountries.com/v3.1/all');
        const countries = yield response.json();
        countries.forEach(createCountryCard);
    });
}
getCountries();
