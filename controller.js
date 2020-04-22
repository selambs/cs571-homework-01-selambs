const { fork } = require('child_process');

exports.fibonacci = (req, res, next) => {
  console.log(req.body);
  try {
    const childProcess = fork("./childProcess.js");
    childProcess.send("start fibonacci");
    childProcess.on("message", (fib) => {
      res.end(`Sum is ${fib}`);
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};
