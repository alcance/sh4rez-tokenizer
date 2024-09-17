// scripts/deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const TokenizedShares = await ethers.getContractFactory("TokenizedShares");
  const tokenizedShares = await TokenizedShares.deploy("MyShares", "MSHR");

  console.log("TokenizedShares deployed to:", tokenizedShares.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
