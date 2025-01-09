const {ethers} = require("hardhat");




async function main() {
  //await deposit();
  await withdraw();
}


async function withdraw() {
    console.log("============================================================================================");
    console.log("===============================TRANSACTION DETAILS==========================================");
    console.log("============================================================================================");

   let provider = new ethers.JsonRpcProvider("http://localhost:8545");
   let signer = new ethers.Wallet("0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d", provider);
   let contractAddress = "0x700b6A60ce7EaaEA56F065753d8dcB9653dbAD35";
   let contract = await ethers.getContractAt("Fund", contractAddress, signer);
   let balance_before_deposit = await provider.getBalance(contractAddress);
   console.log("Balance Before Withdrawal: ", balance_before_deposit);
   let response = await contract.withdraw(ethers.parseEther("0.0001"));
   console.log("Transaction Hash: ", response.hash);
   await response.wait();
   let balance_after_deposit = await provider.getBalance(contractAddress);
    console.log("Balance After Withdrawal: ", balance_after_deposit);
    console.log("============================================================================================");
}




async function deposit() {
  
    console.log("============================================================================================");
    console.log("===============================TRANSACTION DETAILS==========================================");
    console.log("============================================================================================");

   let provider = new ethers.JsonRpcProvider("http://localhost:8545");
   let signer = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
   let contractAddress = "0x700b6A60ce7EaaEA56F065753d8dcB9653dbAD35";
   let contract = await ethers.getContractAt("Fund", contractAddress, signer);
   let balance_before_deposit = await provider.getBalance(contractAddress);
   console.log("Balance Before Deposit: ", balance_before_deposit);
   let response = await contract.deposit({value: ethers.parseEther("10")});
   console.log("Transaction Hash: ", response.hash);
   await response.wait();
   let balance_after_deposit = await provider.getBalance(contractAddress);
    console.log("Balance After Deposit: ", balance_after_deposit);
    console.log("============================================================================================");

}

main().then().catch(err => {
  console.error(err)
})

