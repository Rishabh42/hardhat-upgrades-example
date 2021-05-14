// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = "0x9259C08BBC99c54477b9E0f3EC5176848d65D94c";

  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing upgrade...");
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
  console.log("BoxV2 at:", boxV2Address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
