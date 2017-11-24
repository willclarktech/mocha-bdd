const setUpGlobals = require("../");
const { given, when, then } = require("./steps");

setUpGlobals();

describe("global", () => {
  Given("some condition", given, () => {
    When("some code is executed", when, () => {
      Then("some assertion", then);
    });
  });
});
