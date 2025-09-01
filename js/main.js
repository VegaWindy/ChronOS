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

// 初始化
updateDisplay();