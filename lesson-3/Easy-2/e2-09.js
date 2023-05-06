// Back in the stone age (before CSS), we used spaces to align things on
// the screen. If we have a 40-character wide table of Flintstone family
// members, how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

//

let totalPaddingCount = 40 - title.length;
let leftPaddingCount = Math.floor(totalPaddingCount / 2);

let titleDisplay = title.padStart(leftPaddingCount + title.length);

console.log(titleDisplay);
