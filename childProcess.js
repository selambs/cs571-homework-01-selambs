const fibo = (num) => {
  if (num <= 1) return 1;

  return fibo(num - 1) + fibo(num - 2);
};

process.on("message", (num) => {
  console.log("inside process.on childProcess");
  const fib = fibo(5);
  process.send(fib);
});
