// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardManager is Ownable {
    mapping(address => uint) public rewards;

    function awardTokens(address user, uint amount) external onlyOwner {
        rewards[user] += amount;
    }

    function claimTokens() external {
        require(rewards[msg.sender] > 0, "No rewards to claim.");
        uint amount = rewards[msg.sender];
        rewards[msg.sender] = 0;
        // Lógica para transferir los tokens HTD
        // ERC20(HTD).transfer(msg.sender, amount);
    }

    function checkRewards(address user) external view returns (uint) {
        return rewards[user];
    }
}
