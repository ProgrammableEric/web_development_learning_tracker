let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"; 
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"; 
let startButton = document.getElementById('start');
let currentlyPlaying = true; 

isBot = (door) => {
  if (door.src === botDoorPath) return true;
  else return false; 
}

isClicked = (door) => {
  if (door.src === closedDoorPath) return false;
  else return true; 
}

playDoor = (door) => {
  numClosedDoors -= 1; 
  if (numClosedDoors === 0) {
    gameOver('win'); 
  } else if (isBot(door) === true) {
    gameOver();
  }
}

randomChoreDoorGenerator = (numClosedDoors) => {
  let choreDoor = Math.floor(numClosedDoors * Math.random()); 
  if (choreDoor === 1) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath; 
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoor1 = beachDoorPath; 
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath; 
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying === true) {
    doorImage1.src = openDoor1; 
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying === true) {
    doorImage2.src = openDoor2; 
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying === true) {
    doorImage3.src = openDoor3; 
    playDoor(doorImage3);
  }
};

startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3; 
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true; 
  randomChoreDoorGenerator(numClosedDoors); 
}

startButton.onclick = () => {
  if (currentlyPlaying === false) startRound(); 
}

gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  
  currentlyPlaying = false; 
}

startRound(); 






