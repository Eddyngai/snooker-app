const canvas = document.getElementById('snooker-table');
const ctx = canvas.getContext('2d');

let cueBall = { x 100, y 300 };  白球初始位置
let targetBall = { x 400, y 300 };  目標球初始位置

 繪製桌球界面
function drawTable() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
     繪製白球
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(cueBall.x, cueBall.y, 10, 0, Math.PI  2);
    ctx.fill();
    
     繪製目標球
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(targetBall.x, targetBall.y, 10, 0, Math.PI  2);
    ctx.fill();
}

 計算擊球角度
function calculateAngle() {
    const dx = targetBall.x - cueBall.x;
    const dy = targetBall.y - cueBall.y;
    const angle = Math.atan2(dy, dx)  (180  Math.PI);  轉換為度數
    alert(`擊球角度 ${angle.toFixed(2)}°`);
}

 設置事件
document.getElementById('calculate').addEventListener('click', calculateAngle);

 初始繪製
drawTable();