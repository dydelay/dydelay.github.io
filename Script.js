// 获取所有导航栏链接
const navLinks = document.querySelectorAll('nav a');

// 获取所有工具介绍的 section 元素
const toolSections = document.querySelectorAll('.tool-section');

// 为每个导航栏链接添加点击事件监听器
navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        // 隐藏所有工具介绍的 section
        toolSections.forEach(section => section.classList.add('hidden'));
        
        // 显示当前选中工具的介绍 section
        toolSections[index].classList.remove('hidden');
    });
});