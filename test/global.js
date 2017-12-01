const { default: setGlobals } = require("../");
const { given, when, then } = require("./steps");

setGlobals();

describe("global", () => {
  Given("some condition", given, () => {
    When("some code is executed", when, () => {
      Then("some assertion", then);
    });
  });
});
