import { dnd_items } from "./dnd_items.mjs"


// function assumes that num is less than the 
function getRandomItems (num) {
    
    // holds the number of items left to produce in list
    let return_num = parseInt(num);

    // total items in the existing list
    const tot_items = dnd_items.length - 1;

    // list of JSON to return
    let return_list = []

    // loop that grabs the list of 
    for (let i=0; i < return_num; i++) {
        
        // finds which pos of JSON list
        let random_pos = Math.round(Math.random() * tot_items);

        
        return_list.push(dnd_items[random_pos]);
    }
    return return_list;

}



console.log(getRandomItems(3))