# Valentine's Day Surprise Website for Aswini ❤️

A romantic, animated website created with love by Adwaid.

## Features

- 🎨 Soft pink, red, and white color palette
- 💕 Floating hearts animation
- 💌 Typewriter love letter effect
- 📸 Photo gallery with hover effects
- 💖 Animated reason cards
- ⏰ Countdown timer to next special day
- 🎵 Background music with toggle
- 💍 Surprise popup message
- 📱 Fully mobile responsive

## Setup Instructions

1. **Replace Photos**: 
   - Replace the placeholder images in `index.html` (lines with `via.placeholder.com`)
   - Upload your photos and update the `src` attributes with your image paths
   - Example: `<img src="photos/memory1.jpg" alt="Memory 1">`

2. **Add Background Music**:
   - Download a romantic instrumental MP3 file
   - Save it as `romantic-music.mp3` in the same folder
   - Or update the filename in `index.html` (line with `<source src="romantic-music.mp3"`)

3. **Set Countdown Date**:
   - Open `script.js`
   - Find line: `const specialDate = new Date(2026, 5, 14, 0, 0, 0).getTime();`
   - Change the date: `new Date(Year, Month-1, Day, Hour, Minute)`
   - Note: Months are 0-indexed (0=January, 1=February, etc.)

4. **Open the Website**:
   - Simply double-click `index.html` to open in your browser
   - Or use a local server for best experience

## Customization Tips

- Edit the love letter text in `script.js` (variable `letterText`)
- Modify colors in `style.css` by changing hex values
- Add more reason cards by copying the `.reason-card` div structure
- Adjust animation speeds in CSS keyframes

## Browser Compatibility

Works best in modern browsers (Chrome, Firefox, Safari, Edge)

---

Made with endless love by Adwaid ❤️
