console.log('Loaded!');
//change the text of the main-text div

var img=document.getElementById("madi");
var marginLeft=0;

function moveright(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveright,10);
};

var button=document.getElementById('counter');
button.onclick=function(){
    //create a request 
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function () {
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
             }
        }
    };
    //MAKE A REQUEST TO THE COUNTER END POINT
    request.open('GET','http://kotharikunal1996.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name
//capture name

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    //make request to server and send the name.
   
    //create a request 
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function () {
        if(request.readyState===XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
    //capture a list of namres and render it as a list.
    
    var names =request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>' ;
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
}
}
};
var nameInput=document.getElementById('name');
var name = nameInput.value;
 request.open('GET','http://kotharikunal1996.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);

};
















