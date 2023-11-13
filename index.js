import { init } from './framework'
import { div } from './framework/element'
import { User } from './src/user';

const firstName = "Fabian";
const lastName = "Simon";

// init("#app", div`Hello ${firstName} ${lastName}`);
init("#app", User({ firstName, lastName }));
