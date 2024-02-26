# dndMicroservice.mjs
## Overview
This microservice is for my CS361 partner. The microservice generates a list of random DnD items. The nubmer of items depends on what the microservice receives. 
  
## Running the dndMicroservice.mjs
Utilize node to start dndMicroservice.mjs on your localhost. With dndMicroservice.mjs selected, run the following code:

```
npm install
npm start
```

After, the microservice will statrt on `http://localhost:3000`

## How to Make a Call to dndMicroservice.mjs
Your client page should make a call to the microservice. This should be a GET request in the form of GET /produce_list/:num. <br>
If you are using Postman or calling from a CLI, you can use the following curl to make get request to the local host.

`http://localhost:3000/produce_list/[x]` where [x] is the number of items you want to return. <br>

For example, lets call ` http://localhost:3000/produce_list/2`, which will produce the following in the next section.

## How to Receive Data from dndMicroservice.mjs
The Microservice will send back an HTTP response with a number of items. For example, the call in the previous section will respond with JSON data below:
```
[
    {
        "Name": "Airship",
        "Type1": "Adventuring Gear",
        "Type2": "Exploration, Movement, Utility",
        "Weight": "",
        "Price": 20000
    },
    {
        "Name": "Airship",
        "Type1": "Adventuring Gear",
        "Type2": "Exploration, Movement, Utility",
        "Weight": "",
        "Price": 20000
    }
]
```

## Storing the Item Data in dndMicroservice
Item data is stored on a separate file called `dnd_items.mjs`. This is a separate file that dndMicroservice.mjs calls and holds a list of JSON-type items.


## UML Diagram
The microservice is relatively simple. The client makes an HTTP GET request with the number of items to return `http://localhost:3000/produce_list/[x]`. The microservice then randomly selects the number of items and their details. It then returns a list with all items in JSON format.

![image](https://github.com/mk2256/cs361_microservice/assets/122490106/36bdb61c-2d2d-4fae-8f47-b424586d8b62)


