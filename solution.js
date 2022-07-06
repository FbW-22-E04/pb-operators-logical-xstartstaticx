//  0
const isDogBetter = true;
const isCatBetter = false;
// 1
console.log("1a:", isDogBetter && isCatBetter);
console.log("1b:", isDogBetter || isCatBetter);
console.log("1c:", !(isDogBetter && isCatBetter));
// 2
const atoms = 13e50;
const sandGrains = 75e17;
const starsInSky = 200e29;
// 3
console.log("3a:", atoms > starsInSky && atoms > sandGrains);
console.log("3b:", atoms !== sandGrains);
console.log("3c:", starsInSky < sandGrains || starsInSky > atoms);
console.log("3d:", atoms === starsInSky || atoms !== sandGrains);
console.log("3e:", atoms >= 10 && sandGrains <= 10);
console.log("3f:", atoms * starsInSky < 100 || atoms * sandGrains > 100);
// 4
/**
 * 1a -> with &&, both statements must be true. the second statement in this case is false, so it prints "false" in the terminal.
 *
 * 1b -> with ||, if at least one statement is true, the whole thing is true.  in this case, isDogBetter is true, so it prints "true" in the terminal.
 *
 * 1c -> with !(NOT), it converts to the opposite boolean. in our example !(isDogBetter && isCatBetter)  we have parenthesis so first isDogBetter && isCatBetter is tested, and it would be false as in 1a, however the ! is then applied, which actually results in the opposite boolean which equals "true".
 *
 *
 */
