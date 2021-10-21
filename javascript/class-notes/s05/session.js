/* we have live sessions on monday, wednesday, thursday and saturday. saturdays double session.
 day = "monday", "tuesday" ...
console.log -> "There is no live session" or "single session" or "double session"
*/
// ! if
const day = 'monday';
let sessionInfo = '';
if (day === 'monday') {
  sessionInfo = 'There is single session';
} else if (day === 'wednesday') {
  sessionInfo = 'There is single session';
} else if (day === 'thursday') {
  sessionInfo = 'There is single session';
} else if (day === 'saturday') {
  sessionInfo = 'There is single session';
}
// ! switch case
