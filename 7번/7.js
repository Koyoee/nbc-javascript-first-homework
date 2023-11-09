const count = document.querySelector(".counter");
let countresult = Number(count.textContent);

if (window.location.reload) {
  const intervalId = setInterval(() => {
    console.log("setInterval 실행중??");
    if (countresult < 10) {
      countresult = countresult + 1;
      count.innerHTML = countresult;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}
