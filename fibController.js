const { fork } = require("child_process");

exports.calculateFib = (req, res, next) => {
  //   console.log(req.params.num);
  //   res.send("hello")
  const childProcess = fork("./fibonacci.js");
  childProcess.send("start");
  childProcess.on("message", (fib) => {
    // console.log(req.params.num);
    res.json({ Fib: `${fib}` });
  });
};
