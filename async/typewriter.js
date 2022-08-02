const sentence = "hello there";
let time = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, time)
  time = time + 500;
}

setTimeout (() => {
  process.stdout.write("\n");
}, time)