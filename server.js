var fs = require('fs');

// json file with the data
// data = fs.readFileSync('chemistry.json');
data=JSON.stringify("I am VIjaya");
const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  }) 
// To solve the cors issue
//const cors=require('cors');
	
//app.listen(process.env.PORT,
//	() => console.log("Server Start at the Port"));
	
//app.use(express.static('public'));
//app.use(cors());

// when get request is made, alldata() is called
app.get('/elementss', alldata);

function alldata(request, response) {
	// Returns all information about the elements
	response.send("VIjaya shree kanwal");
}

app.get('/getdata/:data/',getdatav);
async function getdatav(datal,response){
   allin=await getdatavi(datal.params.data);
   response.send(allin+"Got all");
}
async function getdatavi(data){
    ll=JSON.parse(data);
    var allin='';
    for(i=0;i<ll.length;i++){
       
        await fetch("http://proedge.me/test.php?rollnumber="+ll[i])
        .then((resp)=>resp.text())
        .then(function(data) {
            console.log(JSON.stringify(data)+"This is fetched")
          allin+=data+" ";
        })
    }
    return allin;
}


var server = app.listen(process.env.PORT || 8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})