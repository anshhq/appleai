'use strict';
// const express = require('express');
// const app = express();
const store = require('./store.recommend.js');
const PORT = 3000;
const recommendStore = store.users;

/**
 *
 * @param {*} inputUsername
 * @param {*} count
 * @param {*} genderRule
 * @param {*} ageRule
 * @param {*} interestRule
 */
let findMatches = (inputUsername, count = 0, genderRule = true, ageRule = true, interestRule = true) => {
  let username = inputUsername;
  let user = recommendStore.find((o) => o.name === username);

  let users = [];

  let applyGenderRule = () => {
    users = recommendStore.filter((o) => o.gender !== user.gender);
  };

  let applyAgeRule = () => {
    users.sort((p, q) => (p.age > q.age ? 1 : -1));
  };

  let applyInterestRule = () => {
    let userInterests = user.interest.split(',').map((item) => item.trim());
    users.forEach((user) => {
      let interestMatchCount = 0;
      let interests = user.interest.split(',').map((item) => item.trim());
      userInterests.forEach((interest) => {
        if (false === (interests.indexOf(interest) === -1)) {
          interestMatchCount = interestMatchCount + 1;
        }
      });
      user.interestMatchCount = interestMatchCount;
    });
    users.sort((r, s) => (r.interestMatchCount < s.interestMatchCount ? 1 : -1)).sort((p, q) => (p.age > q.age ? 1 : -1));
    users.forEach((user) => {
      delete user.interestMatchCount;
    });
  };

  if (genderRule) {
    applyGenderRule();
  }
  if (ageRule) {
    applyAgeRule();
  }
  if (interestRule) {
    applyInterestRule();
  }

  return count === 0 ? users : users.splice(0, count);
};

/**
 * Examples
 */
console.log(findMatches('UserB', 2));
console.log('\r\n', '### ### ### #', '\r\n');

console.log(findMatches('UserB'));
console.log('\r\n', '### ### ### #', '\r\n');
