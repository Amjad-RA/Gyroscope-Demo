let gyroscope = new Gyroscope({ frequency: 60 });

console.log(gyroscope);


gyroscope.addEventListener('reading', () => {
  console.log(gyroscope.x);
  console.log(gyroscope.y);
  console.log(gyroscope.z);
});

gyroscope.start();