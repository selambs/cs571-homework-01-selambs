/**
 * 1.Explain why do we want sometimes to use setImmediate instead of using setTimeout?
 *     Because setTimeout executes after all the functions are executed in the present queue and no guarentees how long it takes.
 *     setImmediate does not use queue of functions.
 * 2. Explain the difference between process.nextTick and setImmediate?
 *    process.nextTick schedules a function to be executed when the current tick ends(when setImmediate callbacks 
 *     get fired from the event loop)and executed before setImmediate.
 *    process.nextTick provide by libuv and run callbacks without limit.
 * 
 *    setImmediate queues its callbacks on the event loop (will run the callback on the current loop iteration).
 *    setImmediate executes immediately when I/O callback finished.
 * 
 * 3. Name 5 core modules, and 5 global objects from Node.
 * Core- path,fs,http,os,url,events   
 * Global-  __dirname, __filename, Console, Process, setImmediate(callback[, arg][, ...]), clearInterval(intervalObject)

 */

