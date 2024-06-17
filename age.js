const dobtn=document.getElementById("date");
const btn=document.getElementById("btn");
const res=document.getElementById("result");

btn.addEventListener("click",function(){
    console.log("hi");
    const dob=new Date(dobtn.value);
    const month=Date.now()-dob.getTime();
    var   ageDate= new Date(month);
    var age=Math.abs(ageDate.getUTCFullYear()-1970);

    res.innerHTML=`Your Age Is:${age} years` ;

});
