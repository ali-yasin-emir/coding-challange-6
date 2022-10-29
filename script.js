`use strict`;

let calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// console.log(calcTip());

////////////////////////////////////////////////////////////////////////////////////////////

// const jonasArray = [
//   "Jonas",
//   "Schmedtman",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

const jonas = {
  firstName: `Jonas`,
  lastName: `Schmedtman`,
  age: 2037 - 1991,
  job: `teacher`,
  friends: [`Michael`, `Peter`, `Steven`],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

// console.log(jonas[interestedIn]);

const interestedIn = prompt(
  `What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends`
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, age, job, and friends`
  );
}

// jonas.location = `Portugal`;
// jonas[`twitter`] = `@jonasschmedtmann`;
// console.log(jonas);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
//   );

// calcAge: function(){
//   this.age = 2037 - this.birthYear;
//   return this.age;
//   };

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };
