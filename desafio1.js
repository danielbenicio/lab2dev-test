for(let i = 1; i<=100; i++) {
  if((i % 5) == 0  && (i % 3) == 0) {
    console.log(i + ' FizzBuzz');
    continue
  }

  if((i % 3) == 0 ) {
    console.log(i + ' - Fizz');
    continue
  }

  if((i % 5) == 0 ) {
    console.log(i + ' - Buzz');
    continue
  }
};
