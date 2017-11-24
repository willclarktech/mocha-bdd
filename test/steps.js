function given() {
  this.test.ctx.input = "World";
}

function when() {
  this.test.ctx.output = `Hello ${this.test.ctx.input}`;
}

function then() {
  if (this.test.ctx.output !== "Hello World") {
    throw new Error("Something assertion error");
  }
}

module.exports = {
  given,
  when,
  then
};
