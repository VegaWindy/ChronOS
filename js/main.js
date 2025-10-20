let currentValue = 42;
let expressions = [];

const currentValueElement = document.getElementById('currentValue');
const numberInput = document.getElementById('numberInput');
const updateBtn = document.getElementById('updateBtn');

// 更新网页
function updateDisplay() {
  currentValueElement.textContent = currentValue;
}

// 更新 DP
function updateValue(newValue) {
  currentValue += newValue;
  updateDisplay();
}

// 更新按钮的事件监听
updateBtn.addEventListener('click', () => {
  const newValue = parseInt(numberInput.value);
  if (!isNaN(newValue)) {
    updateValue(newValue, 'update');
    numberInput.value = '';  // 清空输入框
  } else {
    alert('请输入有效数字');
  }
});

// 获取 GET 接口数据并显示
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log('GET接口返回:', data)
    document.getElementById('currentValue').textContent = data.value
  })
  .catch(err => console.error('GET接口错误:', err))

// 绑定按钮点击事件，调用 POST 接口
document.getElementById('updateBtn').addEventListener('click', () => {
  const inputValue = Number(document.getElementById('numberInput').value)
  fetch('/api/update', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ inputValue })
  })
    .then(response => response.json())
    .then(data => {
      console.log('POST接口返回:', data)
      alert('更新成功，服务器返回：' + JSON.stringify(data))
    })
    .catch(err => console.error('POST接口错误:', err))
})

// 初始化
updateDisplay();