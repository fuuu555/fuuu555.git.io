// 讓每次滑到bar時候再跑一次 

document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector('#skill');
    const progressBars = document.querySelectorAll('.progress');

    // 設定 Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                    // 每次進入視窗時，為每個進度條重新設置動畫
                 progressBars.forEach(progress => {
                        // 先清除舊動畫
                    progress.style.animation = 'none';

                        // 觸發重繪，使動畫重新開始
                    progress.offsetHeight; 

                        // 設置新動畫
                    progress.style.animation = 'fillProgress 2s ease-out forwards';
                    });
                }
            });
        });

        // 觀察技能區域
        observer.observe(skillsSection);
        
});
// 照片可以點箭頭切換//

document.addEventListener("DOMContentLoaded", () => {
    const imageGroups = [
        ["img/emg1.jpg", "img/emg1-2.jpg", "img/emg1-3.jpg"], // Group 1
        ["img/emg2.jpg", "img/emg2-2.jpg", "img/emg2-3.jpg"], // Group 2
        ["img/emg3.jpg", "img/emg3-2.jpg", "img/emg3-3.jpg"]  // Group 3
    ];
    
    let currentIndices = [0, 0, 0]; // 每組的當前圖片索引
    
        // 切換圖片的函數
    window.changeImage = function(direction, groupIndex) {
        currentIndices[groupIndex] = (currentIndices[groupIndex] + direction + imageGroups[groupIndex].length) % imageGroups[groupIndex].length;
    
            // 獲取當前組的圖片容器
        const imageContainer = document.querySelectorAll(".eimg")[groupIndex];
    
            // 更新容器中的第一張圖片的 src
        const imageElement = imageContainer.querySelector("img");
        imageElement.src = imageGroups[groupIndex][currentIndices[groupIndex]];
    };
});
    