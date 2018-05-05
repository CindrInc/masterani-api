String.prototype.format = function() {
  return [...arguments].reduce((p,c) => p.replace(/%s/,c), this);
};