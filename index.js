// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance == 50 || distance == 34) {
    return 8;
  } else {
    return 1;
  }
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) return (destination - start) * 264;
  else return (start - destination) * 264;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance > 400 && distance < 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  } else {
    return 0;
  }
}
