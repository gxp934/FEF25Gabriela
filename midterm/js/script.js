document.addEventListener('DOMContentLoaded', () => {

    const marquee = document.getElementById('marquee');
    if (marquee) {
        marquee.style.animationDuration = '20s'; 
        window.pauseMarquee = () => { marquee.style.animationPlayState = 'paused'; };
        window.resumeMarquee = () => { marquee.style.animationPlayState = 'running'; };

        marquee.addEventListener('mouseenter', () => {
            marquee.style.animationPlayState = 'paused';
            marquee.style.animationDuration = '6s'; 
            marquee.style.animationPlayState = 'running';
        });
        marquee.addEventListener('mouseleave', () => {
            marquee.style.animationPlayState = 'paused';
            marquee.style.animationDuration = '20s'; 
            setTimeout(()=> marquee.style.animationPlayState = 'running', 50);
        });
        marquee.addEventListener('click', () => {
            marquee.style.animationDuration = '5s'; 
            setTimeout(()=> marquee.style.animationDuration = '20s', 2000);
        });
    }
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const mainFeatureImg = document.querySelector('.split-right .feature-img'); 
    
    function setLightMode(on){
        if(on){
            body.classList.add('light-mode');
            themeBtn.textContent = 'Keep it out';
            if(mainFeatureImg) {
                mainFeatureImg.src = 'assets/main-feature-light-img.jpg'; 
            }
        } else {
            body.classList.remove('light-mode');
            themeBtn.textContent = 'Let it in';
            if(mainFeatureImg) {
                mainFeatureImg.src = 'assets/main-feature-img.jpg'; 
            }
        }
    }

    setLightMode(false); 
    themeBtn.addEventListener('click', () => {
        const isLight = body.classList.contains('light-mode');
        setLightMode(!isLight);
    });

    const moodBtns = document.querySelectorAll('.mood-btn');
    const moodImage = document.getElementById('mood-image');
    
    const moodMap = {
        peace: 'assets/mood-peace.jpg',
        energy: 'assets/mood-energy.jpg', 
        dream: 'assets/mood-dream.jpg'   
    };

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.dataset.mood;
            
            // 1. Manejo de la clase activa
            moodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Lógica de cambio de imagen con fade-in
            //if(moodMap[mood] && moodImage) {
                moodImage.style.opacity = 0;
                
                setTimeout(()=> {
                    moodImage.src = moodMap[mood];
                    moodImage.alt = `Mood: ${mood}`;
                    moodImage.style.opacity = 1; 
                }, 200); 
            //}
        });
    });

   
    moodBtns.forEach(btn => {
        btn.addEventListener('keydown', (e) => {
            if(e.key === 'Enter' || e.key === ' '){
                e.preventDefault();
                btn.click();
            }
        });
    });

    /* pre-load images to avoid flicker */
    const imgsToPreload = Object.values(moodMap).concat([
        'assets/mood-1.jpg','assets/mood-2.jpg','assets/mood-3.jpg','assets/mood-4.jpg','assets/mood-5.jpg',
        'assets/main-feature-img.jpg','assets/main-feature-light-img.jpg','assets/bg-dark.jpg','assets/bg-light.jpg'
    ]);
    imgsToPreload.forEach(src => {
        const im = new Image();
        im.src = src;
    });
});