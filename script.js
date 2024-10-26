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

