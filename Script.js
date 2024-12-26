document.addEventListener('DOMContentLoaded', () => {
 
  const deadline = new Date('2024-12-31T23:59:59');
  

  const elDays = document.querySelector('.timer__days');
  const elHours = document.querySelector('.timer__hours');
  const elMinutes = document.querySelector('.timer__minutes');
  const elSeconds = document.querySelector('.timer__seconds');
  

  const declensionNum = (num, words) => {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  };


  const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');

    elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

    if (diff === 0) {
      clearInterval(timerId);
    }
  };

 
  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
});
  const snowContainer = document.querySelector('.snow');
  
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.innerText = '❄';
    snowContainer.appendChild(snowflake);
  
    setTimeout(() => {
      snowflake.remove();
    }, 1000);
  }
  
  setInterval(createSnowflake, 100);
  

  const snowflakeCSS = document.createElement('style');
  snowflakeCSS.innerHTML = `
    .snowflake {
      position: absolute;
      top: -10px;
      pointer-events: none;
      color: white;
      animation: fall linear infinite;
    }
  
    @keyframes fall {
      to {
        transform: translateY(100vh);
      }
    }
  `;
  document.head.appendChild(snowflakeCSS);


  const greet = document.getElementById('greet')
  const hello = document.createElement('h5')
  hello.textContent = 'I wish you a good day for the new year, study well, prove all hope of your parents '
  hello.style.fontSize = "25px"
  hello.style.position = 'absolute'
  hello.style.marginLeft = "350px"
  hello.style.transform = "translateY(-250vh)"
  hello.style.transition = "all 1s"
  document.body.append(hello)


  greet.addEventListener('click', () => {
    hello.style.transform = "translateY(30vh)"
  
  })




  const head = document.getElementById("head");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        head.style.background = "gray";
        head.style.width ="95%";
        head.style.borderRadius = "25px";
        head.style.marginLeft = "20px";
        head.style.marginRight = "20px";
        head.style.top ="0"
    }else{
        head.style.background = "white"
        head.style.width ="98%";
        head.style.borderRadius = "0px";
        head.style.marginLeft = "0px";
        head.style.marginRight = "0px";
        head.style.top ="60px"
    }
});



function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}