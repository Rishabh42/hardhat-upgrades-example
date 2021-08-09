// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = "0x23FbcaeD67886DCB230A7B428861Bc96BeD42921";
  const safeMathLib = await ethers.getContractFactory("SafeMath");
  const _safeMathLib = await safeMathLib.deploy();

  BoxV2 = await ethers.getContractFactory("BoxV2", {
    libraries: {
      SafeMath: _safeMathLib.address,
    },
  });
  console.log("Preparing upgrade...");
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2, {
    unsafeAllow: ["external-library-linking"],
  });
  console.log("BoxV2 at:", boxV2Address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
