var xmlhttp;
if(window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
}else{
    xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET","url",true);
xmlhttp.send();
xmlhttp.onreadystatechange=function(){
    if(xmlhttp.status==200&&xmlhttp.readyState==4){
        console.log(xmlhttp.requestText);
    }
}