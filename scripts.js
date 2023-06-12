var xhr = new XMLHttpRequest();
xhr.open("GET","https://mnb.hu/arfolyamok",true);
xhr.onreadystatechange=function(){
    console.log(xhr.responseText)
}