const fibonacci = (n) => {
  let a = 0,
    b = 1,
    temp = 1;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
};

process.on("message", (msg) => {
  const fib = fibonacci();
  console.log(fib)
  process.send(fib);
});
