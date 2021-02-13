const axios = require('axios');
const { MongoClient } = require("mongodb");

const options ={
    headers: {
      "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.5",
      "Connection": "keep-alive",
    },
    gzip: true,
    json: true,
}

const url = "mongodb+srv://yoda:starwars2@cluster0.i1x6z.mongodb.net/Options?retryWrites=true&w=majority";
const client = new MongoClient(url);




async function fetch(){
  try{
   let data = await axios.get('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY', options);
   let date = (new Date()).toLocaleString('en-us',{hour:'numeric', minute: 'numeric', second: 'numeric'});
   console.log('Got data->' + date);
  }
  catch(error){
    let date = (new Date()).toLocaleString('en-us',{hour:'numeric', minute: 'numeric', second: 'numeric'});
    console.log(error);
    setTimeout(fetch, 2000);
  }
}




