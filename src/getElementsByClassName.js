// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, source) {
  source = source || document.body;

  let result = [];

  let len = 0;

  if (source.classList) {
    len = Object.keys(source.classList).length;
  }
  
  if (len > 0){
    if (source.classList.contains(className)) {
      result.push(source);
    } 
  }

  if (source.hasChildNodes()) {
    let children = source.childNodes;
    for(let i = 0; i < children.length; i++) {
      result = result.concat(getElementsByClassName(className, children[i]));
    }
  }

  return result;
};
