async function main() {
  // We get the contract to deploy
  const Celo = await ethers.getContractFactory("Norweez");
  const celo = await Celo.deploy();

  await celo.deployed();

  console.log("Celo deployed to:", celo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });