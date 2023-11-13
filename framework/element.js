import { h } from "snabbdom";

const initialState = {
    template: "",
    on: {}
};

const createReducer = args => (acc, curr, idx) => {
    const currArg = args[idx];

    if (currArg && currArg.type === "event") {
        return { ...acc, on: { click: currArg.click }}
    }

    return {
        ...acc,
        template: acc.template + curr + (currArg || "")
    }
}

const createElement = tagName => (strings, ...args) => {
    const { template, on } = strings.reduce(createReducer(args), initialState);
    
    return {
    type: "element",
    template: h(tagName, { on }, template)
  };
};

export const div = createElement("div");
export const p = createElement("p");