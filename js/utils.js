// Recursive print of object
var print = function( o, maxLevel, level ) {
  if ( typeof level == "undefined" ) {
    level = 0;
  }
  if ( typeof level == "undefined" ) {
    maxLevel = 0;
  }

  var str = '';
  // Remove this if you don't want the pre tag, but make sure to remove
  // the close pre tag on the bottom as well
  if ( level == 0 ) {
    str = '<pre>';
  }

  var levelStr = '';
  for ( var x = 0; x < level; x++ ) {
    levelStr += '    ';
  }

  if ( maxLevel != 0 && level >= maxLevel ) {
    str += levelStr + '...</br>';
    return str;
  }

  for ( var p in o ) {
    if ( typeof o[p] == 'string' ) {
      str += levelStr +
        p + ': ' + o[p] + ' </br>';
    } else {
      str += levelStr +
        p + ': { </br>' + print( o[p], maxLevel, level + 1 ) + levelStr + '}</br>';
    }
  }

  // Remove this if you don't want the pre tag, but make sure to remove
  // the open pre tag on the top as well
  if ( level == 0 ) {
    str += '</pre>';
  }
  return str;
};