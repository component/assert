
module.exports = function(expr, msg){
  if (!expr) throw new Error(msg || 'assertion failed');
};