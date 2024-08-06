let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displaytime(){
     let date = new Date();

     //Getting hours minute sec from Date function
     // lets save hour minute and sec in different variable
     let hh  =  date.getHours();
     let mm = date.getMinutes();
     let ss = date.getSeconds();
    

     //lets calculate the rotation for all hands
     let hRotation = 30*hh + mm/2; //as we have calculated its before(we have taken hours in hh and minutes in mm)
     let mRotation = 6 * mm;
     let sRotation = 6 * ss;


     //lets Rotate the hands in the clock
     hr.style.transform = `rotate(${hRotation}deg)`;
     min.style.transform = `rotate(${mRotation}deg)`;
     sec.style.transform = `rotate(${sRotation}deg)`;

   
}


setInterval(displaytime , 1000);