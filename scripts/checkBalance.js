// scripts/checkBalance.js
async function main() {
    const [deployer] = await ethers.getSigners();
    const balance = await deployer.getBalance();
    console.log("Account balance:", ethers.utils.formatEther(balance));
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  