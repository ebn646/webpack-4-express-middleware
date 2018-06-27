
import styles from '../scss/site.scss';
const mathDoer = require('./math-doer');

// This require() statement has side effects.
require('./box-creator');

// mathDoer just does some math on 2 inputs.
const result = mathDoer(7, 3);

// Console.log statements are reprinted on every reload.
console.log('My Math result =: ' + result);

