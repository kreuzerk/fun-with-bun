import chalk from "chalk";

import {didTheyFight} from "./src/wiki.js";

console.log(chalk.cyan('Ruffy fought Do Flamingo in Dressrosa: '),
    didTheyFight('Ruffy', 'Do Flamingo', 'Dressrosa')
        ? chalk.green('yes, it was an epic fight')
        : chalk.red('no, but it would have been an epic fight')
);

