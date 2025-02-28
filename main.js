document.getElementById('submitBtn').addEventListener('click', getZodiacSign);

const items = [
    { name: "Ashe", image: "Graphics/ashe.png", Sound: "Sounds/Ashe_Select.mp3", description: "Ashe is a born leader, and that’s exactly what makes her a natural Leo. She’s got that royal presence, commanding respect and leading the Freljord with both strength and grace. Like a true lion, she stands tall, exudes confidence, and inspires those around her. Ashe’s sharp vision and unwavering resolve match Leo’s ambition and powerful sense of pride." },
    { name: "Bard", image: "Graphics/bard.png", Sound: "Sounds/Bard_Select.mp3", description: "Bard is like the ultimate Cancer: mysterious, nurturing, and deeply connected to the world around him. He’s a gentle soul who travels the cosmos, helping those in need and restoring balance. His quiet, protective nature and almost parental guidance make him a perfect fit for Cancer’s empathetic and caring vibes. Plus, there is something so beautifully sentimental about his wandering spirit." },
    { name: "Gnar", image: "Graphics/gnar.png", Sound: "Sounds/Gnar_Select.mp3", description: "Gnar might seem like a surprising fit for Virgo, but it actually makes sense when you think about it. He’s playful and curious, yet there’s a calculated side to him, especially when he transforms into his monstrous form. Like Virgo, Gnar can switch from lighthearted to intensely focused in a heartbeat. His careful control over his wild side and his strategic approach to battle are spot on with Virgo’s analytical and adaptable nature." },
    { name: "Gragas", image: "Graphics/gragas.png", Sound: "Sounds/Gragas_Select.mp3", description: "When it comes to enjoying life’s comforts, no one does it better than Gragas. Just like a true Taurus, he’s all about good food, great drinks, and having a blast. But don’t be fooled by his laid-back vibe. He’s as solid as a rock when it counts. Whether he's brawling in battle or throwing back brews, Gragas embodies Taurus’ mix of strength, stability, and an undeniable love for life’s pleasures." },
    { name: "Hecarim", image: "Graphics/hecarim.png", Sound: "Sounds/Hecarim_Select.mp3", description: "Aquarius is all about thinking outside the box, and Hecarim’s spectral, otherworldly nature fits right in. He brings a unique kind of chaos to the battlefield, embodying Aquarius’ innovative and unconventional spirit. His blend of mysticism and raw power also taps into the sign’s connection to all things strange and extraordinary." },
    { name: "Jinx", image: "Graphics/jinx.png", Sound: "Sounds/Jinx_Select.mp3", description: "If there’s one champion who perfectly captures Gemini’s duality, it’s Jinx. She’s playful and unpredictable, with a knack for turning any situation on its head. One moment, she’s laughing and causing chaos. The next, she’s a whirlwind of explosions and mayhem. Her ever-changing nature and sharp wit reflect Gemini’s adaptability and mischievous charm." },
    { name: "Kha", image: "Graphics/kha.png", Sound: "Sounds/KhaZix_Select.mp3", description: "If anyone embodies the mysterious and intense vibes of Scorpio, it’s Kha'zix. He thrives in the shadows, evolving and adapting to outsmart his opponents. Scorpios are known for their transformative nature, and Kha'zix literally evolves throughout the game. His stealthy, cunning approach and the threat he poses from the unseen are classic Scorpio traits." },
    { name: "Lee Sin", image: "Graphics/leesin.png", Sound: "Sounds/Lee_Sin_Select.mp3", description: "Lee Sin perfectly captures Pisces' deep intuition and spiritual nature. Even without sight, he navigates the world with a strong sense of inner vision, just like Pisces, who are often guided by their intuition. His calm demeanor, balanced approach, and thoughtful movements in battle showcase the empathy and wisdom that Pisces are known for." },
    { name: "Sion", image: "Graphics/sion.png", Sound: "Sounds/Sion_Select.mp3", description: "Sion might not be your typical free-spirited Sagittarius, but he absolutely nails the sign’s adventurous and fearless side. Charging headfirst into battle with zero hesitation, he’s all about forward momentum, just like the archer’s straightforward approach to life. Sion’s unstoppable force and relentless nature capture Sagittarius’ boldness and love for a good fight." },
    { name: "Teemo", image: "Graphics/teemo.png", Sound: "Sounds/Teemo_Select.mp3", description: "Teemo might be small, but he’s got that Libra charm in spades. He’s cheerful, sociable, and knows how to keep things balanced, especially when he's setting his traps with tactical precision. Libras love harmony, and while Teemo’s shrooms might not seem harmonious to his enemies, his strategic approach and balanced gameplay make him an ideal representative of the sign." },
    { name: "Yasuo", image: "Graphics/yasuo.png", Sound: "Sounds/Yasuo_Select.mp3", description: "Yasuo is all about diving headfirst into danger, which makes him a perfect match for bold and fearless Aries. He’s got that classic ram-like energy, charging in, never backing down, and always pushing forward. Whether he’s slashing through enemies with his sword or riding the wind, Yasuo’s relentless drive and fierce independence are pure Aries vibes." },
    { name: "Zed", image: "Graphics/zed.png", Sound: "Sounds/Zed_Select.mp3", description: "Zed is a master of discipline, which makes him a true Capricorn at heart. He’s ambitious, strategic, and always working towards mastering his craft. Capricorns are known for their patience and long-term vision, and Zed’s control over shadows and his methodical approach to taking down his enemies fit right in with the goat’s determination and practicality." }
];

const zodiacChampionMap = {
    'Aries': 'Yasuo',
    'Taurus': 'Gragas',
    'Gemini': 'Jinx',
    'Cancer': 'Bard',
    'Leo': 'Ashe',
    'Virgo': 'Gnar',
    'Libra': 'Teemo',
    'Scorpio': "Kha",
    'Sagittarius': 'Sion',
    'Capricorn': 'Zed',
    'Aquarius': 'Hecarim',
    'Pisces': 'Lee Sin'
};

window.onload = () => {
    const buttonsContainer = document.getElementById('championButtons');
    buttonsContainer.innerHTML = ''; // Clear any existing content

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'champion-card';
        card.onclick = () => displayChampion(item.name);

        card.innerHTML = `
            <img src="Graphics/${item.name.toLowerCase().replace(/\s/g, '')}-button.jpg" alt="${item.name}">
            <p>${item.name}</p>
        `;

        buttonsContainer.appendChild(card);
    });
};


function getZodiacSign() {
    const dateInput = document.getElementById('birthdate').value;
    if (!dateInput) {
        document.getElementById('result').textContent = 'Please enter a valid date.';
        return;
    }
    const date = new Date(dateInput);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const zodiac = getZodiac(month, day);

    if (!zodiac) {
        document.getElementById('result').textContent = 'Invalid date!';
        return;
    }

    document.getElementById('result').textContent = `Your Zodiac sign is: ${zodiac}`;
    const championName = zodiacChampionMap[zodiac];
    const champion = items.find(item => item.name === championName);

    if (champion) {
        displayChampion(champion.name);
    }
}

function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'Libra';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'Gemini';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    return null;
}

function toggleHelpPopup() {
    const helpPopup = document.getElementById('helpPopup');
    helpPopup.classList.toggle('hidden');
}

let currentAudio = null;

function displayChampion(championName) {
    const champion = items.find(item => item.name === championName);
    if (champion) {
        // Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Display the image
        const img = document.getElementById("displayImage");
        img.src = champion.image;
        img.alt = champion.description;
        img.classList.remove('hidden');

        // Display the description in the styled box
        const desc = document.getElementById("description");
        const descBox = document.getElementById("descriptionBox");
        desc.textContent = champion.description;
        descBox.classList.remove('hidden');

        // Play the new audio
        currentAudio = new Audio(champion.Sound);
        currentAudio.play();

        // Smooth scroll to the description box
        const elementPosition = descBox.getBoundingClientRect().top + window.pageYOffset;
        const offset = 100;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });

        // 🎉 Trigger Confetti with tsParticles
        launchConfetti();
    } else {
        console.error("Champion not found:", championName);
    }
}


function launchConfetti() {
    console.log("Launching side confetti...");

    // Check if the confetti function is available
    if (typeof confetti === 'function') {
        console.log("Confetti function found!");

        // Confetti from the left side (shifted slightly inwards)
        confetti({
            particleCount: 100,
            angle: 100,                // Adjusted angle for better trajectory
            spread: 80,                // Wider spread for more coverage
            origin: { x: 0.1, y: 0.5 } // 0.1 brings it more into the screen from the left
        });

        // Confetti from the right side (shifted slightly inwards)
        confetti({
            particleCount: 100,
            angle: 80,                 // Adjusted angle for symmetrical effect
            spread: 80,
            origin: { x: 0.9, y: 0.5 } // 0.9 brings it more into the screen from the right
        });
    } else {
        console.error("Confetti function not found!");
    }
}
