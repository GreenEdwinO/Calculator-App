// Simple Calculator

var display = document.querySelector('.first-space');
var result = document.querySelector('.second-space');
var span = document.querySelector('.span-two');
var buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case 'Clear':
        display.innerText = '';
        result.innerText = '';
        break;
        case 'Del':
          if(display.innerText) {
            display.innerText = display.innerText.slice(0, -1);
          }
          break;
        case '=':
        
          try{
            result.innerText = eval(display.innerText);
          } catch {
            result.innerText = 'Error!';
            result.style.color = 'rgb(219, 154, 154)';
            window.setTimeout(function(){location.reload()},3000)
          }
          break;
      default:
        display.innerText += e.target.innerText;
    }
  })
})
