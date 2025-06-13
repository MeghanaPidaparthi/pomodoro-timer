
        // Get DOM elements
        const timerDisplay = document.getElementById('timer-display-pixel');
        const startBtn = document.getElementById('start-btn');
        const pauseBtn = document.getElementById('pause-btn');
        const resetBtn = document.getElementById('reset-btn');
        const pomodoroModeBtn = document.getElementById('pomodoro-mode');
        const shortBreakModeBtn = document = document.getElementById('short-break-mode');
        const longBreakModeBtn = document.getElementById('long-break-mode');
        const pomodoroDurationInput = document.getElementById('pomodoro-duration');
        const shortBreakDurationInput = document.getElementById('short-break-duration');
        const longBreakDurationInput = document.getElementById('long-break-duration');
        const pomodorosCompletedSpan = document.getElementById('pomodoros-completed');
        const alarmSound = document.getElementById('alarm-sound');
        const body = document.body; // Reference to body for background changes

        // Timer variables
        let timerInterval;
        let timeLeft; // in seconds
        let currentMode = 'pomodoro'; // 'pomodoro', 'short-break', 'long-break'
        let pomodoroCount = 0;
        let isRunning = false;

        /**
         * Initializes the timer with the correct duration for the current mode.
         */
        function initializeTimer() {
            let durationInMinutes;
            if (currentMode === 'pomodoro') {
                durationInMinutes = parseInt(pomodoroDurationInput.value);
            } else if (currentMode === 'short-break') {
                durationInMinutes = parseInt(shortBreakDurationInput.value);
            } else { // long-break
                durationInMinutes = parseInt(longBreakDurationInput.value);
            }

            // Ensure duration is a valid number, default to 1 if not.
            if (isNaN(durationInMinutes) || durationInMinutes < 1) {
                durationInMinutes = 1;
                // Optionally, reset the input value to 1 or a default
                if (currentMode === 'pomodoro') pomodoroDurationInput.value = 25;
                else if (currentMode === 'short-break') shortBreakDurationInput.value = 5;
                else longBreakDurationInput.value = 15;
                console.warn("Invalid duration input, defaulting to 1 minute.");
            }

            timeLeft = durationInMinutes * 60; // Convert to seconds
            updateDisplay(); // Update display immediately
        }

        /**
         * Updates the timer display with the current timeLeft.
         */
        function updateDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        /**
         * Starts the Pomodoro timer countdown.
         */
        function startTimer() {
            if (isRunning) return; // Prevent multiple intervals
            isRunning = true;
            startBtn.classList.add('hidden');
            pauseBtn.classList.remove('hidden');

            timerInterval = setInterval(() => {
                timeLeft--;
                updateDisplay();

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    playAlarm();
                    handleTimerEnd();
                }
            }, 1000);
        }

        /**
         * Pauses the Pomodoro timer.
         */
        function pauseTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            startBtn.classList.remove('hidden');
            pauseBtn.classList.add('hidden');
        }

        /**
         * Resets the timer to the initial duration of the current mode.
         */
        function resetTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            startBtn.classList.remove('hidden');
            pauseBtn.classList.add('hidden');
            initializeTimer(); // Reset to current mode's duration
        }

        /**
         * Plays the alarm sound.
         */
        function playAlarm() {
            if (alarmSound) {
                alarmSound.currentTime = 0; // Rewind to start
                alarmSound.play().catch(e => console.error("Error playing sound:", e));
            }
        }

        /**
         * Handles actions when the timer reaches zero.
         * Switches mode and updates pomodoro count.
         */
        function handleTimerEnd() {
            if (currentMode === 'pomodoro') {
                pomodoroCount++;
                pomodorosCompletedSpan.textContent = pomodoroCount;

                if (pomodoroCount % 4 === 0) {
                    switchMode('long-break');
                } else {
                    switchMode('short-break');
                }
            } else { // It was a break, go back to pomodoro
                switchMode('pomodoro');
            }
            // For a more traditional Pomodoro, it often waits for user to click Start after a break.
            // If you want it to auto-start the next phase uncomment the line below:
            // startTimer();
        }

        /**
         * Switches the timer to the specified mode.
         * @param {string} mode - 'pomodoro', 'short-break', or 'long-break'
         */
        function switchMode(mode) {
            clearInterval(timerInterval); // Stop any running timer
            isRunning = false;
            currentMode = mode;

            // Update active mode button styling
            document.querySelectorAll('.mode-btn-pixel').forEach(btn => {
                btn.classList.remove('current-mode');
            });
            document.getElementById(`${mode}-mode`).classList.add('current-mode');

            // Reset buttons visibility
            startBtn.classList.remove('hidden');
            pauseBtn.classList.add('hidden');

            // Initialize timer for the new mode
            initializeTimer();

            // Update body background color based on mode
            body.classList.remove('from-purple-600', 'to-indigo-800', 'from-blue-400', 'to-blue-600', 'from-green-400', 'to-green-600');
            body.classList.remove('from-red-400', 'to-orange-500', 'from-teal-400', 'to-cyan-600', 'from-yellow-400', 'to-lime-600'); /* Remove old classes */

            if (mode === 'pomodoro') {
                body.style.background = 'linear-gradient(135deg, #2c3e50, #34495e)'; /* Dark blue/purple for Pomodoro */
            } else if (mode === 'short-break') {
                body.style.background = 'linear-gradient(135deg, #4CAF50, #8BC34A)'; /* Green for Short Break */
            } else { // long-break
                body.style.background = 'linear-gradient(135deg, #2196F3, #64B5F6)'; /* Blue for Long Break */
            }
        }

        // Event Listeners
        startBtn.addEventListener('click', startTimer);
        pauseBtn.addEventListener('click', pauseTimer);
        resetBtn.addEventListener('click', resetTimer);

        pomodoroModeBtn.addEventListener('click', () => switchMode('pomodoro'));
        shortBreakModeBtn.addEventListener('click', () => switchMode('short-break'));
        longBreakModeBtn.addEventListener('click', () => switchMode('long-break'));

        // Update timer if user changes duration inputs, and then reset
        pomodoroDurationInput.addEventListener('change', resetTimer);
        shortBreakDurationInput.addEventListener('change', resetTimer);
        longBreakDurationInput.addEventListener('change', resetTimer);

        // Initialize the timer when the page loads
        window.onload = function() {
            initializeTimer();
        };
