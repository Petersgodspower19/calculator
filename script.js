// im writing a function to put the values of whatever number or symbol has been clicked
function appendtoResult(value){
    document.getElementById('result').value += value;
}
 // function to clear the input field whenever the C button is clicked
 function clearResult(){
    document.getElementById('result').value = '';
 }
 // im writing a function that deletes the latest input
 function removeInput(){
      let result = document.getElementById('result').value;
      document.getElementById('result').value = result.slice(0, -1);
 }
 //now to the calculating function, its a bit tricky but anyhow sha
 function calculateResult(){
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'nigga check your inputs';
    }
 }
 // the if else conditional statement could also be applied in the last function

 function square(){
    let result = document.getElementById('result').value;
    let square = Math.pow(parseFloat(result), 2);
    document.getElementById('result').value = square;
 }
 // the parseFloat method converts the input value to a floating value , so the calculations could handle both decimals
 // the Math.pow squares the input and it takes two arguements
 // the Math.sqrt returns the squareroot of the input 
 function squareRoot(){
    let result = document.getElementById('result').value;
    let sqrt = Math.sqrt(parseFloat(result));
    document.getElementById('result').value = sqrt;
 }
 function toggleSign(){
    let result = document.getElementById('result').value;
    //if the input field is not empty we should be able to change the positive value of whatever number was typed in
    if (result != '') {
        let number = parseFloat(result);
        // toggle the sign by multiplying it with -1
        document.getElementById('result').value = number * -1;
    }
 }