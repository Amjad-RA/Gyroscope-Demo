let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
  console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
  console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
  document.getElementById("root").innerHTML = `Angular velocity along the X-axis ${gyroscope.x} Angular velocity along the Y-axis ${gyroscope.y} Angular velocity along the Z-axis ${gyroscope.z}`
});
gyroscope.start();