
function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;
  
    const isFaulty = Math.random() < 0.1; 
    try {
      let result = eval(expression);
      if (isFaulty) {
        result += Math.floor(Math.random() * 10) - 5;
      }
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  