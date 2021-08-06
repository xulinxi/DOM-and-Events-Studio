window.addEventListener("load", function () {
    const flightStatus = document.getElementById('flightStatus');
  const takeOffBtn = document.getElementById("takeoff");
  const shuttleBackground = document.getElementById('shuttleBackground')
  const shuttleHeight = document.getElementById('spaceShuttleHeight')

  takeOffBtn.addEventListener("click", function () {
    const result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      flightStatus.innerHTML = "Shuttle in flight!";
      shuttleBackground.style.backgroundColor = 'blue';
      shuttleHeight.innerHTML = "10,000"
    }
  });
  landButton.addEventListener('click', function () {
      window.alert("The shuttle is landing. Landing gear engaged.")
      flightStatus.innerText = "The Shuttle has landed."
      shuttleBackground.style.backgroundColor = '#34ff70';
      shuttleHeight.innerHTML = "0"
  })
});
