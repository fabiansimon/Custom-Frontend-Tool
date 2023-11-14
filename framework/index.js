import * as snabbdom from "snabbdom";
const patch = snabbdom.init([
    snabbdom.eventListenersModule,
]);

export const init = (selector, component) => {
    const app = document.querySelector(selector);
    patch(app, component.template);
};

let state = {}
  
export const createComponent = ({
    template,
    methods = {},
    initialState = {},
}) => {
    state = initialState;
    let prev; 

    const mappedMethods = props => Object.keys(methods).reduce((acc, key) => ({
        ...acc,
        [key]: (...args) => {
            state = methods[key](state, ...args);
            const nextNode = template({
                ...props,
                ...state,
                methods: mappedMethods(props)
            });
            patch(prev.template, nextNode.template);
            return state;
        }
    }),
        {}
    );

    return props => {
        prev = template({ ...props, ...state, methods: mappedMethods(props) });
        return prev; 
    }
}