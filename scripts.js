let step = 1;
document.getElementById('step1').style.display = 'block';

function wrongAnswer(answer, reply) {
  document.getElementById(`step${step}`).style.display = 'none';
  document.getElementById('result').innerHTML = reply;
  setTimeout(() => {
    step++;
    document.getElementById('result').innerHTML = '';
    document.getElementById(`step${step}`).style.display = 'block';
  }, 2000);
}

const noBtn = document.getElementById('noBtn');

function yesClick() {
  document.getElementById('step4').style.display = 'none';
  document.getElementById('result').innerHTML = "🌿 好啊，来吧 =)))) 。🌿";
}

function noClick() {
  document.getElementById('result').innerHTML = "哈哈哈，你以为你点得到？😝";
}

noBtn.onmouseover = () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
};