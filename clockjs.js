var timertime
        var stopp
        setInterval(time,1000)
        function time()
        {
     var newdate = new Date();
     if(newdate.getHours()>9)
     document.getElementById("hr").innerHTML=newdate.getHours();
     else if(newdate.getHours()<=9)
     document.getElementById("hr").innerHTML="0"+newdate.getHours();
     if(newdate.getMinutes()>9)
     document.getElementById("min").innerHTML=newdate.getMinutes();
     else if(newdate.getMinutes()<=9)
     document.getElementById("min").innerHTML="0"+newdate.getMinutes();
     if(newdate.getSeconds()>9)
     document.getElementById("sec").innerHTML=newdate.getSeconds();
     else if(newdate.getMinutes()<=9)
     document.getElementById("sec").innerHTML="0"+newdate.getSeconds();
     var hr=newdate.getHours();
     if(hr>=12 )
     document.getElementById("half").innerHTML='PM';
     else if(hr<12)
     document.getElementById("half").innerHTML='AM';
     var atime=b3()
     if(document.getElementById("hr").innerHTML+":"+document.getElementById("min").innerHTML ==atime)
     alert("it is "+atime+" now");
        }
        function b3()
          {
          var alarmtime=document.getElementById("alarm").value
           //timertime=document.getElementById("Timer").value
         // if(timertime!=0){
        // setInterval(timeralert,1000)}
         
       
          return alarmtime;
          }
          function b31()
          {
            timertime=document.getElementById("Timer").value
         if(timertime!=0){
         stopp = setInterval(timeralert,1000)}
          }
        
      function b1(){
          document.getElementById("alarm").style.display="inline"
          document.getElementById("set").style.display="inline"
        
      }
      function bclose(){
        document.getElementById("alarm").style.display="none"
          document.getElementById("set").style.display="none"
          document.getElementById("Timer").style.display="none"
      }
      function b2(){
        document.getElementById("Timer").style.display="inline"
          document.getElementById("set").style.display="inline"
      }
      function timeralert(){
        timertime=timertime-1;
        document.getElementById("tim_disp").innerHTML=timertime;
        if (timertime==0){
         alert("Times up!!");
         clearInterval(stopp)
        
         document.getElementById("tim_disp").style.display="none"
        }
      }
      function refresh()
      {
        location.reload()
      }