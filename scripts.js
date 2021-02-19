const input = document.querySelector('.input-text');

const textBlock = document.createElement('p');
document.body.append(textBlock);

input.addEventListener("input",(e) =>{
  const valueText = document.querySelector('.input-text').value;
  textBlock.innerHTML = `${decorateText(valueText)}`

});
function decorateText(text){
  const h1Text = text.match(/\#\b.+\b/g);
  const boldText = text.match(/\*\*.+\*\*/g)
  
  if(h1Text){
    console.log(h1Text);
    h1Text.forEach(item => {
      text = text.replace(item,`<h1>${item.slice(1)}</h1>`);
    });
    
  }
  if(boldText){
    boldText.forEach(item => {
      text = text.replace(item,`<b>${item.slice(2,-2)}</b>`);
    })
    console.log(text)
  } 
  
  return text
}