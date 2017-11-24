const getTestFn = (rootTestFn, { only, skip } = {}) => {
  if (only) return rootTestFn.only;
  if (skip) return rootTestFn.skip;
  return rootTestFn;
};

const createPreStep = (prefix, modifiers) => (
  description,
  beforeEachHook,
  suiteBody
) => {
  const suiteFn = getTestFn(describe, modifiers);
  suiteFn(`${prefix} ${description}`, () => {
    beforeEach(beforeEachHook);
    suiteBody();
  });
};

const createAssertionStep = modifiers => (description, testBody) => {
  const testFn = getTestFn(it, modifiers);
  testFn(`Then ${description}`, testBody);
};

const Given = createPreStep("Given");
const When = createPreStep("When");
const Then = createAssertionStep();

Given.only = createPreStep("Given", { only: true });
When.only = createPreStep("When", { only: true });
Then.only = createAssertionStep({ only: true });

Given.skip = createPreStep("Given", { skip: true });
When.skip = createPreStep("When", { skip: true });
Then.skip = createAssertionStep({ skip: true });

const setGlobals = () => {
  global.Given = Given;
  global.When = When;
  global.Then = Then;
};

module.exports = setGlobals;
module.exports.Given = Given;
module.exports.When = When;
module.exports.Then = Then;
