async function searchData(){
    try{
        let gotData = document.querySelector("#find").value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=cdc90ff8&s=${gotData}`);
        let data = await res.json();
        return data.Search
    }
    catch(err){
        console.log(err.message);
    }
}

async function main(){
    let gotData = await searchData();
    console.log(gotData);

    if(gotData === undefined){
        return false;
    }
    appendGotData(gotData);
}

function appendGotData(user){
    document.querySelector("#data").innerHTML="";
    user.map(function(el){

        var div = document.createElement("div");
        div.setAttribute("class","append");

        let p = document.createElement("div");
        p.textContent=el.Title;
        p.style.marginLeft="20px"
        let img = document.createElement("img");
        img.src=el.Poster;
        img.style.height="80px"
        img.style.width="70px";
       

        let div2 = document.createElement("div");
        div2.setAttribute("class","dataDiv");
        div2.append(img,p);
        div.append(div2);


        document.querySelector("#data").append(div);


    });
}

let time;

function debounce(func1,wait){

    if(time){
        clearTimeout(time);
    }

   time = setTimeout(function(){
        func1();
    },wait)
}

document.querySelector("#mainDiv").addEventListener("click",function(){
    var bag = document.querySelector("#data");
    var found = document.querySelector("#find");
    bag.style.display="none";
    found.textContent=null;
})


document.querySelector("#find").addEventListener("click",function(){
    var data = document.querySelector("#data");   
    data.style.display="block";
    
})