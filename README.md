# Pixel Art Pomodoro Timer

A simple yet stylish Pomodoro timer application with a retro pixel art aesthetic, designed to help you manage your time effectively using the Pomodoro Technique.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Run Locally](#how-to-run-locally)
- [Usage](#usage)
- [Color Palette](#color-palette)
- [Credits](#credits)

---

## About

This project reimagines the classic Pomodoro Timer with a charming pixel art interface, reminiscent of old operating systems and retro games. It provides a focused work timer (Pomodoro), short breaks, and longer breaks, helping users maintain productivity and prevent burnout.

---

## Features

- **Pixel Art Aesthetic:** Custom CSS for a nostalgic, pixelated look and feel.
- **Mode Switching:** Easily switch between Pomodoro, Short Break, and Long Break modes.
- **Customizable Durations:** Adjust the time for Pomodoro sessions, short breaks, and long breaks via input fields.
- **Automatic Transitions:** The timer automatically transitions to a short break after a Pomodoro, and to a long break after every four Pomodoros.
- **Pomodoro Counter:** Keeps track of completed Pomodoro sessions.
- **Audible Alarm:** A subtle beep sound indicates when a timer session ends.
- **Responsive Design:** Adapts to different screen sizes, from mobile to desktop.
- **Themed Backgrounds:** Dynamic background gradients change with each mode for visual cues.

---

## Technologies Used

- **HTML5:** For the structural markup of the application.
- **CSS3:** For all styling, including custom pixel art effects, layout, and responsiveness.
- **JavaScript (Vanilla JS):** For all interactive functionalities, timer logic, and DOM manipulation.
- **Google Fonts:** Specifically uses the 'Press Start 2P' font to achieve the pixelated text effect.

---

## How to Run Locally

To run this project on your local machine, follow these simple steps:

1. **Clone the repository (or copy the code):**  
   If this were a GitHub repository, you would clone it:
   ```sh
   git clone https://github.com/yourusername/pixel-art-pomodoro-timer.git
   cd pixel-art-pomodoro-timer
   ```
   Since you have the code directly, simply save the provided HTML content as an `.html` file (e.g., `index.html`) on your computer.

2. **Open in a web browser:**  
   Navigate to the directory where you saved `index.html` and open the file directly in your preferred web browser (e.g., Chrome, Firefox, Edge).

The application will load in your browser, and you can start using it immediately!

---

## Usage

- **Start:** Click the "Start" button to begin your Pomodoro session.
- **Pause/Resume:** Click "Pause" to temporarily stop the timer, and "Start" again to resume.
- **Reset:** Click "Reset" to stop the current timer and set it back to its initial duration for the current mode.
- **Switch Modes:** Use the "Pomodoro", "Short Break", and "Long Break" buttons at the top to manually switch between different timer types.
- **Adjust Durations:** Customize the length of Pomodoros, short breaks, and long breaks using the input fields in the "Settings" section. Changes will apply after a reset or mode switch.
- **Automatic Cycle:** After a Pomodoro ends, it automatically transitions to a short break. Every 4 Pomodoros, it will initiate a long break. An alarm sound will play upon completion of each session.

---

## Color Palette

The current color palette is inspired by a cool, muted retro theme, featuring blues, greens, and grays for a distinct pixel-art feel.

- **Background:** `linear-gradient(135deg, #2c3e50, #34495e)` (Dark blue-gray shades)
- **Window Background:** `#ECEFF1` (Light cool gray)
- **Borders/Shadows/Text:** `#4A5568` (Darker desaturated blue/gray)
- **Header:** `#4DB6AC` (Subtle teal)
- **Active Mode Button/Default Button:** `#03A9F4` (Vibrant retro blue)
- **Timer Numbers/Start Button:** `#4CAF50` (Retro green)
- **Pause Button:** `#FFEB3B` (Yellow)
- **Reset Button:** `#F44336` (Red)

---

## Credits

- **Font:** 'Press Start 2P' by CodeMan38
- **Alarm Sound:** SoundJay.com

---
