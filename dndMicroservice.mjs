import { dnd_items } from "./dnd_items.mjs"
import express from "express"
import bodyParser from "body-parser"
const PORT = 3000
const app = express()

// parses JSON request boy
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// function that generates the JSON list
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
        let random_pos = Math.floor(Math.random() * tot_items);

        
        return_list.push(dnd_items[random_pos]);
    }
    return return_list;

}



app.get('/produce_list/:num', (req, res) => {

    // get the number of items to return
    const numItems = parseInt(req.params.num);
    const randomItems = getRandomItems(numItems);

    // get number 
    res.json(randomItems);
})

// Start the server
app.listen(PORT, () => {
    console.log(`Microservice is listening at http://localhost:${PORT}`);
});
