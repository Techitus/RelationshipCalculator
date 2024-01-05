 //Get the value from user

function checkDate(){
     //Get the value from user
    let  input = document.getElementById("date").value;

// Convert the string into date format
let inputDate = new Date(input);

// Take current date
let currentDate = new Date();
if (isNaN(inputData)){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        background: "url(./broken.jpg)",
        color: "white",
        text: "Please Enter a Date.",
        width: "350px"
      });
}

else if(currentDate < inputDate){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        background: "url(./broken.jpg)",
        color: "white",
        text: "Your Entred Date is not Valid!!",
        width: "350px"
      });
      document.getElementById("date").value = "";
}
else{

let timeDifference = Math.abs(currentDate - inputDate)

let dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
Swal.fire({
    title: `It have been ♥ ${dayDifference} days ♥ since ${input}.`,
   background: "url(./bg.jpg)",
   color: "white",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });

document.getElementById("date").value = "";
}
}

   

