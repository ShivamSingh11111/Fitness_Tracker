// ==================== BMI CALCULATION ====================
const bmiCalcBtn = document.getElementById("calculateBmiBtn");
if (bmiCalcBtn) {
    bmiCalcBtn.addEventListener("click", function () {
        var height = document.getElementById("height").value;
        var weight = document.getElementById("weight").value;

        if (height && weight) {
            height = height / 100; // cm to meters
            var bmi = weight / (height * height);
            var result = document.getElementById("bmi-result");
            result.innerHTML = "Your BMI is: " + bmi.toFixed(2);

            if (bmi < 18.5) {
                result.innerHTML += "<br>Category: Underweight";
            } else if (bmi < 24.9) {
                result.innerHTML += "<br>Category: Normal weight";
            } else if (bmi < 29.9) {
                result.innerHTML += "<br>Category: Overweight";
            } else {
                result.innerHTML += "<br>Category: Obese";
            }
        } else {
            alert("Please enter both height and weight.");
        }
    });
}

// ==================== QUICK NAVIGATION BUTTONS ====================
const trackWorkoutBtn = document.getElementById("trackWorkoutBtn");
if (trackWorkoutBtn) {
    trackWorkoutBtn.addEventListener("click", function () {
        window.location.href = "workouts.html";
    });
}

const logDietBtn = document.getElementById("logDietBtn");
if (logDietBtn) {
    logDietBtn.addEventListener("click", function () {
        window.location.href = "diet.html";
    });
}

const updateSleepBtn = document.getElementById("updateSleepBtn");
if (updateSleepBtn) {
    updateSleepBtn.addEventListener("click", function () {
        window.location.href = "sleep.html";
    });
}

const checkBmiBtn = document.getElementById("checkBmiBtn");
if (checkBmiBtn) {
    checkBmiBtn.addEventListener("click", function () {
        window.location.href = "bmi.html";
    });
}

// // ==================== WORKOUT TRACKING ====================
// // 

// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");
// const caloriesDisplay = document.getElementById("calorie-result");

// const exerciseMETs = {
//     "Walking": 3.8,
//     "Running": 9.8,
//     "Pushups": 8.0,
//     "Pullups": 8.5,
//     "Rope Jumping": 12.0,
//     "Swimming": 7.0,
//     "Weight Lifting": 6.0,
//     "Cycling": 6.0,
//     "Plank": 4.0,
//     "Squats": 8.0,
//     "Yoga": 2.5,
//     "Sitting": 1.3
// };

// let startTime = null;
// let selectedExercises = [];

// if (startBtn && stopBtn && caloriesDisplay) {
//     startBtn.addEventListener("click", function () {
//         selectedExercises = [];
//         const checkboxes = document.querySelectorAll(".exercise-list input[type='checkbox']:checked");

//         checkboxes.forEach(function (checkbox) {
//             selectedExercises.push(checkbox.value);
//         });

//         if (selectedExercises.length === 0) {
//             alert("Please select at least one exercise before starting!");
//             return;
//         }

//         startTime = new Date();
//         caloriesDisplay.innerText = "Workout started...";
//     });

//     stopBtn.addEventListener("click", function () {
//         if (!startTime) {
//             alert("Please start your workout first!");
//             return;
//         }

//         const endTime = new Date();
//         const seconds = Math.floor((endTime - startTime) / 1000);

//         if (seconds <= 0) {
//             alert("Workout time too short!");
//             return;
//         }
        
//         const reps = document.getElementById("repetitions").value;
//         const time = document.getElementById("time").value;
//         const distance = document.getElementById("distance").value;
//         const liftWeight = document.getElementById("lift-weight").value;

//         const caloriesBurnt = calculateCalories(seconds, selectedExercises);
//         caloriesDisplay.innerText = caloriesBurnt + " kcal";

//         startTime = null;
//     });
// }


// // ==================== WORKOUT DATA SUBMISSION ====================

// // let startTime = null;
// let endTime = null;

// document.getElementById("startWorkout").addEventListener("click", () => {
//   startTime = new Date();
//   console.log("Workout started at:", startTime);
// });

// document.getElementById("stopWorkout").addEventListener("click", () => {
//   endTime = new Date();
//   const durationInMinutes = (endTime - startTime) / 60000; // milliseconds to minutes
//   console.log("Workout stopped at:", endTime);
//   console.log("Duration (in minutes):", durationInMinutes.toFixed(2));

//   // Use this duration value wherever needed
// });


// // ==================== CALORIES CALCULATION ====================
// function calculateCalories(seconds, exerciseList) {
//     let weightInput = document.getElementById("user-weight")?.value;
//     let weight = parseFloat(weightInput);

//     if (isNaN(weight) || weight <= 0) {
//         alert("Please enter a valid weight in kg!");
//         return 0;
//     }

//     let totalCalories = 0;
//     let minutes = seconds / 60;

//     exerciseList.forEach(function (exercise) {
//         if (exerciseMETs[exercise]) {
//             let calories = exerciseMETs[exercise] * weight * (minutes / 60);
//             totalCalories += calories;
//         }
//     });

//     return Math.round(totalCalories);
// }


// const timeInput = document.getElementById("timeInput");
// const distanceInput = document.getElementById("distanceInput");
// const repsInput = document.getElementById("repsInput");
// const weightLiftedInput = document.getElementById("weightLiftedInput");

// const exerciseInputMap = {
//     "Walking": ["distanceInput"],
//     "Running": ["distanceInput"],
//     "Cycling": ["distanceInput"],
//     "Swimming": [],
//     "Pushups": ["repsInput"],
//     "Pullups": ["repsInput"],
//     "Plank": [],
//     "Squats": ["repsInput"],
//     "Yoga": [],
//     "Sitting": [],
//     "Rope Jumping": ["repsInput"],
//     "Weight Lifting": ["repsInput", "weightLiftedInput"],
// };

// // let selectedExercises = [];

// function updateInputFieldsVisibility() {
//     // Hide all inputs by default
//     repsInput.style.display = "none";
//     timeInput.style.display = "none";
//     distanceInput.style.display = "none";
//     weightLiftedInput.style.display = "none";

//     selectedExercises.forEach(exercise => {
//         const inputsToShow = exerciseInputMap[exercise];
//         if (inputsToShow) {
//             inputsToShow.forEach(inputId => {
//                 document.getElementById(inputId).style.display = "block";
//             });
//         }
//     });
// }
