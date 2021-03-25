const { response, request } = require('express');
const fs = require('fs');

//Just a helper function to check objects content
function isEmptyObject(obj) {
    return !Object.keys(obj).length;
  }

// ----
const spellsGet = (req = request, res = response) => {

    fs.readFile('spellbook.json', (err, data) => {
        if (err) throw err;
        
        const query = req.query;                                        //Storing the query as an object
        const spells = JSON.parse(data);
        const result = spells.spells.find(e => e.id === query.spell)  //Result of the search based on the query

        //Query validation - If empty, shows the whole spellbook
        if(isEmptyObject(query)){
            res.json(spells);
        }
        else{
            //Show results - If doesn't exists, go to the error default response
            if(result){
                res.json(result);
            }
            else res.json('No results found. Please check your spelling!');
        }
    })
}

module.exports = {
    spellsGet
}