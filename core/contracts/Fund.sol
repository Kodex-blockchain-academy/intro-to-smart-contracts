// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28; // declear the solidity version

contract Fund{

    address[] public receivers;
    address[] public investors;
    mapping (address => uint8) withdrawn;

    constructor(address[] memory _receivers){
        receivers = _receivers;
    }

    function deposit() public payable {
        require(msg.value >= 1 ether, "You need to send some ether");
        investors.push(msg.sender);
    }

    function withdraw(uint256 amount) public {
      require(amount <= 1e15, "Amount cannot be more than 0.001 ether");
      if (withdrawn[msg.sender] > 1){
        revert( "You have already withdrawn your share");
    }
      address[] memory receivers_array = receivers; 
      address caller = msg.sender;
    for(uint i = 0; i < receivers_array.length; i++){
        if(receivers_array[i] == caller){
            payable(caller).transfer(amount);
            withdrawn[caller]++;
            }
        }
    }



}
