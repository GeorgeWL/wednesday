/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

const messageEl = document.getElementById("message");

const videoEl = document.getElementById("video");

const dateNow = new Date();

const day = dateNow.getDay();

const isWednesday = day === 3;

function getColours() {
  const getColour = () => Math.ceil(Math.random() * 255);
  const red = getColour();
  const green = getColour();
  const blue = getColour();
  return { red, green, blue };
}

const { red, green, blue } = getColours();
document.body.style.background = `rgba(${red}, ${green}, ${blue}, .1`;

setInterval(()=>{
    const { red, green, blue } = getColours();
    document.body.style.background = `rgba(${red}, ${green}, ${blue}, .1`;
},1000)
            
if (isWednesday) {
  messageEl.innerText = "IT IS WEDNESDAY MY DUDES";
} else {
  messageEl.innerText = "NOPE";
  videoEl.remove();
}
