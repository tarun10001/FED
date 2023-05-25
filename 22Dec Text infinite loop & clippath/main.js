const textLoop = () => {
    const containerTitle = document.querySelector(".container__title");
    const elem = containerTitle.children[0];
    let i = 0;
    containerTitle.insertAdjacentHTML("beforeend", containerTitle.innerHTML);
  
    setInterval(() => {
      elem.style.marginLeft = `-${i}px`;
      if (i > elem.clientWidth) {
        i = 0;
      }
      i = i + 0.9;
    }, 0);
  };
  
  textLoop();