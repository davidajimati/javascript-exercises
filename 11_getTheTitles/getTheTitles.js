const getTheTitles = function(array) {
  let res = [];

  array.forEach(item => {
    res.push(item.title)
  });
  return res;
};

// Do not edit below this line
module.exports = getTheTitles;
