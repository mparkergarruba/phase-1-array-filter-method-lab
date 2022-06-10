function findMatching (array, name) {
    // if (array.filter === name) {
    // return name
    // filter over "array" 
    let result = array.filter(function(item) {
         return item.toLowerCase() === name.toLowerCase()
        })

    return result

    }



    //check each element again "name"
    // if element equals name return name

function fuzzyMatch (array, name) {
    //filter over array
    //determine if "substring/"name" is === to beginging of "element"
    // find matches between elements and "name / key letters"
    //return those matches
    let result = array.filter(function(item) {
       // return item.indexOf(name) === 0
       return item.slice(0, name.length) === name
    })
    return result
}

function matchName (array, driver) {
    //filtering over our array
    let result = array.filter(function(item) {
        return item.name === driver
    })
    return result
    
    //we want to compare array.name to "string/name"
}