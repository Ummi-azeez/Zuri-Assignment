// JavaScript to display real-time data
        const nameElement = document.querySelector('[data-testid="slackUserName"]');
        const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
        const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

        // Get current date and time
        const currentDate = new Date();
        const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getUTCDay()];
        const utcTimeMilliseconds = currentDate.getTime();

        // Update the HTML elements
        nameElement.textContent = 'haysha Azeez'; // 
        dayOfWeekElement.textContent = `Current Day of the Week: ${dayOfWeek}`;
        utcTimeElement.textContent = `Current UTC Time in Milliseconds: ${utcTimeMilliseconds}`;