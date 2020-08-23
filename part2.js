//Going through the numbers one by one and testing them is not efficient enough.

const check = (term) => {
  arr = term.split('');
  var size = arr.length;

  if (size < 2) {
    return false;
  }

  while (!check_element(arr)) {
    for (let i = 0; i < size; i++) {
      if (parseInt(arr[i]) > parseInt(arr[i + 1])) {
        arr[i] = parseInt(arr[i]) - 1;

        replace_with_9(i + 1);
      }
    }
  }

  return arr.join('');
};

const replace_with_9 = (i) => {
  for (var i = i; i < arr.length; i++) {
    arr[i] = '9';
  }
};

const check_element = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (parseInt(arr[i]) > parseInt(arr[i + 1])) {
      return false;
    }
  }

  return true;
};

console.log(check('23245'));
console.log(check('33245'));
console.log(check('111110'));
console.log(check('2'));
