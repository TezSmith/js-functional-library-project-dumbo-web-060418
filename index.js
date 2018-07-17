fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

// OBJECTS OR ARRAYS

    each: function(collection, cb) {
      // create copy of collection (NO MUTABLE DATA)
        let newCollection = Object.assign({}, collection)

        for(let i in newCollection){
          // cb is called with el, index, collection
          cb(newCollection[i], i, newCollection)
        }
      // return original collection
      return collection
    },

    map: function(collection, cb) {
      // create copy of collection (NO MUTABLE DATA)
        let newCollection = Object.assign([], collection)
        let returnArray = []

        for(let i in newCollection){
          // cb(newCollection[i], i, newCollection)
          returnArray.push(cb(newCollection[i], i))

        }
        return returnArray
    },

    reduce: function(collection, cb, acc) {
      let newCollection = Object.assign({}, collection)

      for(let i in newCollection) {
        acc = cb(acc, newCollection[i], newCollection)
      }
      return acc;
    },

    find: function(collection, predicate){
      for(let el of collection){
        if(predicate(el)){
          return el
        }
      }
    },

    filter: function(collection, predicate){
      const filtered = []

      for(let el of collection){
        if(predicate(el)){
          filtered.push(el)
        }
      }
      return filtered
    },

    size: function(collection){
      let counter = 0

      for(let i in collection){
        counter++
      }
      return counter
    },

// ARRAYS ONLY

    first: function(array, n=1){
      return array.slice(0, n)
    },

    last: function(array, n=1){
      return array.slice(-n)
    },

    compact: function(array) {
      let compacted = []

      for (let el of array) {
        if (!!el) {
          compacted.push(el);
        }
      }
      return compacted
    },

    sortBy: function(array, iteratee){
      let sorted = array.slice();
      return sorted.sort(function(a, b,){ return iteratee(a) - iteratee(b) });
    },

    flatten: function(array, shallow = false){
      let flat = []

      for (let el of array){
        if (Array.isArray(el) && shallow === false){
          flat.push(...fi.flatten(el))
        } else if (Array.isArray(el)){
          flat.push(...el)
        } else {
          flat.push(el)
        }
      }
      return flat
    },


    uniq: function(array, isSorted = false, cb = (num => num)){
      let unique = []
      const seenCBs = {}

      if (!!isSorted){
        for(let el of array){
          if (unique[unique.length - 1] !== el && !seenCBs[cb(el)]){
            unique.push(el);
            seenCBs[cb(el)] = true;
          }
        }
      } else {
        const seen = {}

        for(let el of array){
          if (!seen[el] && !seenCBs[cb(el)]){
            unique.push(el);
            seen[el] = true;
            seenCBs[cb(el)] = true;
          }
        }
      }

      return unique;
    },


    functions: function() {

    },


  }
})()

fi.libraryMethod()











//
