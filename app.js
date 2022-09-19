function calculate(){
    var a=  parseInt(document.getElementById('bookOne').value);
    var b=  parseInt(document.getElementById('bookTwo').value);
    var c=  parseInt(document.getElementById('bookThree').value);
    var d=  parseInt(document.getElementById('bookFour').value);
    var e=  parseInt(document.getElementById('bookFive').value);

    if(a>100 || b>100 || c>100 || d>100 || e>100)
    {
        alert("Please enter the correct value.");
    }
    else{
        var f=a+b+c+d+e;
        document.getElementById('obtain').innerHTML=f;
        var per=f/500*100;
        document.getElementById('pers').innerHTML=per;
        if(a>39 && b>39 && c>39 && d>39 && e>39)
        {
            document.getElementById('rem').innerHTML="<span style='color:#292'>Pass</span>";
        }
        else{
            document.getElementById('rem').innerHTML="<span style='color:red'>Fail</span>";
        }
        if(per>=80)
        {
           document.getElementById('grade').textContent="A";
        }
        else if(per>=70)
        {
           document.getElementById('grade').textContent="B";
        }
        else if(per>=60)
        {
           document.getElementById('grade').textContent="C";
        }
        else if(per>=50)
        {
           document.getElementById('grade').textContent="D";
        }
        else if(per>=40)
        {
           document.getElementById('grade').textContent="E";
        }
        else{
            if(f>=80)
        {
           document.getElementById('grade').textContent="F";
        }
        }
        }
    }
   

