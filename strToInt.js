/**
 * @returns {integer}
 * @param {string|integer} input
 *
 * JavaScript Interpretor:
 * Any browser or any ES6 engine; V8, Hermes, SpiderMonkey etc.
 */

'use strict';

let strToInt = (input) => {
  const integers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const intLower = -2147483648;
  const intMax = 2147483647;

  let numberCalc = 0;
  let numberSign = '+';
  let shiftForSign = 0;
  let charMatchCounter = 0;

  let inputCharArray = input.split('');

  if (false === input.length || input === null || typeof input === 'undefined') {
    throw 'Invalid input string, ' + input;
  }

  if (inputCharArray[0] === '-') {
    shiftForSign = 1;
    numberSign = '-';
    charMatchCounter++;
  } else if (inputCharArray[0] === '+') {
    shiftForSign = 1;
    charMatchCounter++;
  }

  for (let i = 0; i < input.length; i++) {
    integers.forEach((n) => {
      if (inputCharArray[shiftForSign + i] === n + '') {
        charMatchCounter++;
        numberCalc += n * 10 ** (input.length - 1 - i - shiftForSign);
      }
    });
  }
  if (charMatchCounter < inputCharArray.length) {
    throw 'Error in convert string to integer, ' + input;
  } else if (charMatchCounter === inputCharArray.length) {
    if (numberSign === '+') {
      return numberCalc;
    } else {
      return 0 - numberCalc;
    }
  }
};

try {
  console.log(strToInt('-537'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('-1'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('537'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('1'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('100'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('0'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('+0'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('-0'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('+101'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('+corona'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('-corona'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('covid19'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('19covid'));
} catch (e) {
  console.log(e);
}

try {
  console.log(strToInt('!'));
} catch (e) {
  console.log(e);
}
