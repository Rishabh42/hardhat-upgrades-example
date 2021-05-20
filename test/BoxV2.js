// test/BoxV2.js
// Load dependencies
const { expect } = require("chai");

let BoxV2;
let boxV2;

// Start test block
describe("BoxV2", function () {
  beforeEach(async function () {
    const safeMathLib = await ethers.getContractFactory("SafeMath");
    const _safeMathLib = await safeMathLib.deploy();
    console.log("1");
    console.log("safeMath deployed to:", _safeMathLib.address);

    BoxV2 = await ethers.getContractFactory("BoxV2", {
      libraries: {
        SafeMath: _safeMathLib.address,
      },
    });
    boxV2 = await BoxV2.deploy();
    await boxV2.deployed();
    console.log("BoxV2", boxV2.address);
  });

  // Test case
  it("retrieve returns a value previously stored", async function () {
    // Store a value
    await boxV2.store(41);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await boxV2.retrieve()).toString()).to.equal("41");
  });

  // Test case
  it("retrieve returns a value previously incremented", async function () {
    // Increment
    await boxV2.increment();

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await boxV2.retrieve()).toString()).to.equal("1");
  });
});
