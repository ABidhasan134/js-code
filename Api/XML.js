//this is the way to get property , element and function from XMLhttpRequest();
//console.log(window.XMLHttpRequest);
//creating arrow fuction here
const makeReq=(Requests,URL,date)=>
{
//to see Requests property
const xhr= new XMLHttpRequest();

//console.log(xhr);
//opening api request 
xhr.open(Requests,URL);

xhr.setRequestHeader("content-Type","application/json");

//for proses date JSON formet to JS formet
xhr.onload=()=>
{
    //bring from response to console
    let date=xhr.response;
    //converting json to js formet
    console.log(JSON.parse(date));
}

xhr.onerror=()=>
{
    console.log("Error is here");
}

xhr.send(JSON.stringify(date));
}
const getdeta=()=>
{
   makeReq("GAT",'https://jsonplaceholder.typicode.com/posts');
    
}
const sentdeta=()=>
{
    makeReq("POST","https://jsonplaceholder.typicode.com/posts",
    {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}
sentdeta();
getdeta();
// getdeta();
//console.log("hi");
