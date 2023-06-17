const sumAll = function (first, last) {
  if (typeof (first) != 'number' || typeof (last) != 'number') {
    return ("ERROR");
  }
  if (first < 0 || last < 0) {
    return ("ERROR");
  }

  let answer = 0;
  if (first < last) {
    while (first <= last) {
      answer += first;
      first++;
    }
    return answer;
  }

  if (first > last) {
    while (first >= last) {
      answer += first;
      first--;
    }
    return answer;
  }


  return answer;
};

// Do not edit below this line
module.exports = sumAll;
