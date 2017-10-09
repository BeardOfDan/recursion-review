// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // '{ key: [2] }'
  
  let char = json[0];    

  // if identified
  if (char === "{") {
    // is object
    let pairCounter = 0;
    let endOfThis; // end character of the object

    for (let i = 1; i < json.length; i++) {  
      const thisChar = json[i];
      
      if (thisChar === "{") {
        pairCounter++;
      }

      if (thisChar === "}") {
        if (pairCounter > 0) {
          pairCounter--;
        } else {
          endOfThis = i;   
        }
      }
    }

    const thisObj = json.slice(1, endOfThis);

    let commaPlaces = [];

    for (let i = 0; i < thisObj.length; i++) {
      let thisChar = thisObj[i];

      if (thisChar === ",") {
        commaPlaces.push(i);
      }      
  
    }

    const kvCount = commaPlaces.length + 1;

    let colonPlace = [];

    for(let i = 0; i < kvCount; i++) {
      // search for a colon
      // let startChar = 
      for(let j = commaPlaces[i]; j < commaPlaces[i + 1]; j++) {
      
      }
    }
// { 'one' : 4, 'two' : { 'yes':8, 'no':10 }, 'three': 6 }

// thisObj[1,commaPlaces[0]]
// thisObj[commaPlaces[0]+1,commaPlaces[1]-1]

    // join the parseJSON(thisObj) with  and empty object'
    let result = {};

    console.log(result);

    return result;
  } // end of object case

  

};
