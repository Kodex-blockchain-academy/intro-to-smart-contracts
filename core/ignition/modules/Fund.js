
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

let receivers = [ 
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", 
    "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
]

module.exports = buildModule("FundModule", (m) => {

  const receiver = m.getParameter("receivers", receivers);

  const fund = m.contract("Fund", [receiver], {});

  return { fund };
});
