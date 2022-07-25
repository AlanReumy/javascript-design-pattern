const strategy = {
  S: function (salary) {
    return 4 * salary;
  },
  A: function (salary) {
    return 2 * salary;
  },
  D: function (salary) {
    return salary;
  },
};

export const caculate = function (level, salary) {
  return strategy[level](salary);
};
