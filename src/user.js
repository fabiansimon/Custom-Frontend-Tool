import { createComponent } from "../framework";
import { onClick } from "../framework/event";
const { div } = require("../framework/element");

const initialState = { firstName: "Fabian", lastName: "Simon" };

const methods = {
    changeName: (state, firstName) => ({ ...state, firstName }),
};

const template = ({ firstName, lastName, methods }) => {
    return div`${onClick(() => methods.changeName("Julian"))} Hello there ${firstName} ${lastName}`;
}

export const User = createComponent({ template, methods, initialState });