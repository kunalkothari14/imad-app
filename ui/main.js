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
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE){
            //take some action
            if(request.status==200){var counter=request.response.Text;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
             }
        }
    };
    request.open('GET','http://kotharikunal1996.imad.hasura-app.io/counter',true);
    request.send(null);
};





















