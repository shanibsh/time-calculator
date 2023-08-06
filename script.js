// Define an array to store the durations of all time intervals
const allDurations = [];

function calculateTime() {
  const startTime = document.getElementById("start-time").value;
  const endTime = document.getElementById("end-time").value;

  // Convert the time strings to Date objects
  const startDate = new Date(`1970-01-01T${startTime}`);
  const endDate = new Date(`1970-01-01T${endTime}`);

  // Calculate the time difference in milliseconds
  const timeDiffMs = endDate - startDate;

  // Calculate the hours and minutes
  const hours = Math.floor(timeDiffMs / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiffMs % (1000 * 60 * 60)) / (1000 * 60));

  // Display the result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Current duration: ${hours} hours and ${minutes} minutes`;

  // Store the current duration in the array
  allDurations.push(timeDiffMs);

  // Calculate the total duration of all intervals
  const totalDurationMs = allDurations.reduce((acc, duration) => acc + duration, 0);
  const totalHours = Math.floor(totalDurationMs / (1000 * 60 * 60));
  const totalMinutes = Math.floor((totalDurationMs % (1000 * 60 * 60)) / (1000 * 60));

  // Display the total duration
  const totalDiv = document.getElementById("total-duration");
  totalDiv.innerHTML = `Total duration: ${totalHours} hours and ${totalMinutes} minutes`;
}
