/*
path = "ad", "fs", "ds" // ad => aws-devops , fs u know, ds => data-science
pathInfo = ""; // provide some information about the selected path.
*/
const pathSelected = prompt(
  'Which path would you like to attend?\nad -> aws-devops\nfs -> full-stack\nds -> data-science'
);
let pathInfo = '';
// ! with if statement
if (pathSelected === 'ad') {
  pathInfo = 'You are going to manage infrastructure of cloud servers';
} else if (pathSelected === 'ds') {
  pathInfo =
    'You will manipulate high volume of data to obtain meaningful results';
} else if (pathSelected === 'fs') {
  // we did not cover others
  pathInfo = 'You will build awesome web applications';
} else {
  pathInfo = 'Invalid selection';
}
console.log(pathInfo);
// ! ternary
pathInfo =
  pathSelected === '"ad'
    ? 'You are going to manage infrastructure of cloud servers'
    : pathSelected === '"ds'
    ? 'You will manipulate high volume of data to obtain meaningful results'
    : pathSelected === '"fs'
    ? 'You will build awesome web applications'
    : 'Invalid selection';
console.log(pathInfo);

// ! switch case
