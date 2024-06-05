document.getElementById('fetchWorkouts').addEventListener('click', fetchWorkouts);

function fetchWorkouts() {
    const workoutsContainer = document.getElementById('workouts');
    workoutsContainer.innerHTML = 'Loading...';
    
    const muscle = 'biceps'; // You can change this to any muscle group you like
    const apiKey = 'ghL2QUjACFc7SLuFQj7esA==fYDdIswxA4sLWgLq'; // Your API key

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
        success: function(result) {
            workoutsContainer.innerHTML = '';
            result.forEach(workout => {
                const workoutDiv = document.createElement('div');
                workoutDiv.className = 'workout';
                workoutDiv.innerHTML = `<h3>${workout.name}</h3><p>${workout.instructions}</p>`;
                workoutsContainer.appendChild(workoutDiv);
            });
        },
        error: function ajaxError(jqXHR) {
            workoutsContainer.innerHTML = 'Error loading workouts. Please try again later.';
            console.error('Error: ', jqXHR.responseText);
        }
    });
}
