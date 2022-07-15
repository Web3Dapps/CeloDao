async function main() {
  // We get the contract to deploy
  const Celo = await ethers.getContractFactory("PRIDE");
  const celo = await Celo.deploy("0x0f0B5B5328b564487f0A2b1d0F6E772EA37bff6E","0x0f0B5B5328b564487f0A2b1d0F6E772EA37bff6E","0x0f0B5B5328b564487f0A2b1d0F6E772EA37bff6E","0x0f0B5B5328b564487f0A2b1d0F6E772EA37bff6E");

  await celo.deployed();

  console.log("Celo deployed to:", celo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });