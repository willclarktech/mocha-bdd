const { Given, When, Then } = require("../");
const { given, when, then } = require("./steps");

describe("local", () => {
  Given("some condition", given, () => {
    When("some code is executed", when, () => {
      Then("some assertion", then);
    });
  });
});
