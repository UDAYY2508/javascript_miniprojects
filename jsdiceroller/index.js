 
  const numofdice = document.getElementById('numofdice').value;
  const diceresult = document.getElementById('diceresult');
  const diceimg = document.getElementById('diceimg');
function rolldice(){
  
    const values = [];
    const img = [];
    for(let i=0; i<numofdice; i++){
        const value =Math.floor( Math.random() * 6) + 1;
        values.push(value);
        img.push(`<img src="dice_img/${value}.png">`);
    }
  diceresult.textContent = `dice: ${values.join(', ')}`;
  diceimg.innerHTML = img.join('');
 } 