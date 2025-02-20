const canvas = document.getElementById('snooker-table');
const ctx = canvas.getContext('2d');

let cueBall = { x 100, y 300 };  �ղy��l��m
let targetBall = { x 400, y 300 };  �ؼвy��l��m

 ø�s��y�ɭ�
function drawTable() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
     ø�s�ղy
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(cueBall.x, cueBall.y, 10, 0, Math.PI  2);
    ctx.fill();
    
     ø�s�ؼвy
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(targetBall.x, targetBall.y, 10, 0, Math.PI  2);
    ctx.fill();
}

 �p�����y����
function calculateAngle() {
    const dx = targetBall.x - cueBall.x;
    const dy = targetBall.y - cueBall.y;
    const angle = Math.atan2(dy, dx)  (180  Math.PI);  �ഫ���׼�
    alert(`���y���� ${angle.toFixed(2)}�X`);
}

 �]�m�ƥ�
document.getElementById('calculate').addEventListener('click', calculateAngle);

 ��lø�s
drawTable();