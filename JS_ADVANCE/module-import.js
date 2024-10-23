// ES6 modules

// Named import : It is used to import a specific function from a module.
import { add, subtract } from "./module-export.js";
console.log(add(2, 3));
console.log(subtract(2, 3));

// Default import : It is used to import a specific function from a module.
import multiply from "./module-export.js";
console.log(multiply(2, 3));