// Floating Hearts Animation
function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }, 300);
}

// Love Letter Typewriter Effect
const letterText = "Aswini, from the day you came into my life, everything changed. Your smile is my favorite sight, your voice is my favorite sound, and your happiness is my biggest priority. I am so grateful to have you. I love you more than words can explain.";

function typeWriter(text, element, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Button Click Handlers
document.getElementById('openHeartBtn').addEventListener('click', function() {
    document.getElementById('heroSection').style.display = 'none';
    const letterSection = document.getElementById('loveLetterSection');
    letterSection.classList.add('active');
    
    setTimeout(() => {
        typeWriter(letterText, document.getElementById('letterText'));
    }, 500);
});

document.getElementById('continueBtn').addEventListener('click', function() {
    document.getElementById('loveLetterSection').classList.remove('active');
    
    setTimeout(() => {
        document.getElementById('reasonsSection').classList.add('active');
    }, 100);
    
    setTimeout(() => {
        document.getElementById('countdownSection').classList.add('active');
    }, 100);
});

// Countdown Timer
function updateCountdown() {
    // Set your special date here (Year, Month-1, Day, Hour, Minute)
    const specialDate = new Date(2026, 5, 14, 0, 0, 0).getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = specialDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "<h2>It's Today! 🎉</h2>";
        }
    }, 1000);
}

// Surprise Popup
setTimeout(() => {
    document.getElementById('popupOverlay').classList.add('active');
}, 10000);

document.getElementById('popupClose').addEventListener('click', function() {
    document.getElementById('popupOverlay').classList.remove('active');
});

// Music Control
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

musicToggle.addEventListener('click', function() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = '<span class="music-icon">🔇</span>';
        isMusicPlaying = false;
    } else {
        bgMusic.play().catch(e => {
            console.log('Audio play failed:', e);
        });
        musicToggle.innerHTML = '<span class="music-icon">🔊</span>';
        isMusicPlaying = true;
    }
});

// Auto-play music on first user interaction
document.body.addEventListener('click', function playMusic() {
    if (!isMusicPlaying) {
        bgMusic.play().catch(e => {
            console.log('Audio play failed:', e);
        });
        musicToggle.innerHTML = '<span class="music-icon">🔊</span>';
        isMusicPlaying = true;
    }
    document.body.removeEventListener('click', playMusic);
}, { once: true });

// Initialize
createHearts();
updateCountdown();
