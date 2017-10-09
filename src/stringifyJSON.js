// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var objType = typeof obj;

  if(objType === 'number' || objType === 'boolean') {
    return '' + obj;
  }

  if(obj === null) {
    return 'null';
  }

  if(objType === 'string') {
    return `"${obj}"`;
  }

  if (Array.isArray(obj)) {
    let res = [];
    for(let i = 0; i < obj.length; i++) {
      res.push(stringifyJSON(obj[i]));
    }
    return '[' + res.join() + ']';
  }

  if (objType === 'object') {
    let res = [];
    for (let key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      keyStr = stringifyJSON(key);
      res.push(keyStr + ':' + stringifyJSON(obj[key]));
    }
    return '{' + res.join() + '}';
  }

};
