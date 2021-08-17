nameofstudentarray=[];
 function submit(){
   var displaystudents=[];
    for(var i=1;i<=4;i++){
        var name=document.getElementById("student"+i).value;  
        console.log(name);
        nameofstudentarray.push(name);
    }
    console.log(nameofstudentarray); 
     var length=nameofstudentarray.length;
    console.log(length);
   for (var k=0;k<length;k++){
    displaystudents.push("<h4> Name- "+nameofstudentarray[k]+"</h4>");
    console.log(displaystudents);
   }
   console.log(displaystudents);
    document.getElementById("resultwithcomma").innerHTML=displaystudents;
    var removecommas=displaystudents.join(" ");
    console.log(removecommas);
    document.getElementById("resultwithoutcomma").innerHTML=removecommas;
     document.getElementById("submitbutton").style.display="none";
     document.getElementById("sortbutton").style.display="inline-block";
 }
 function sort(){
     nameofstudentarray.sort();
     console.log(nameofstudentarray);
     var displaystudentarraysort=[];
     var length2=nameofstudentarray.length;
     console.log(length2);
     for (var a=0;a<length2;a++){
        displaystudentarraysort.push("<h4> Name- "+nameofstudentarray[a]+"</h4>");
        console.log(displaystudentarraysort);
       }
       var removecommas=displaystudentarraysort.join(" ");
       console.log(removecommas);
       document.getElementById("resultwithoutcomma").innerHTML=removecommas;
 }