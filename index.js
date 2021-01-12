/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let format_time = time.split(':').join("")
  
  let time_integer = parseInt(format_time)

  if (time_integer < 1200) {
  return "Good Morning"
  } else if (time_integer > 1200 && time_integer < 1700) {
    return "Good Afternoon" 
  } else {
    return "Good Evening"
  }
}


// function displayMessage(string) {
//   document.getElementById('greeting').innerText = string
// }

function displayMessage(string) {
  document.querySelector('#greeting').innerText = string
  }