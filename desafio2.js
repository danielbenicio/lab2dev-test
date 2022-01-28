setInterval(() => {
  const date = new Date()

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(`${hour}:${minutes}:${seconds}`);
}, 1000 );