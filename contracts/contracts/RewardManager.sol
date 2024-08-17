// contracts/RewardManager.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardManager is Ownable {
    mapping(address => uint256) public rewards;

    event RewardAdded(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function addReward(address user, uint256 amount) external onlyOwner {
        rewards[user] += amount;
        emit RewardAdded(user, amount);
    }

    function claimReward() external {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No reward to claim");
        rewards[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: reward}("");
        require(success, "Transfer failed");
        emit RewardClaimed(msg.sender, reward);
    }

    receive() external payable {}
}

// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

// contract RewardManager is Ownable {
//     mapping(address => uint) public rewards;

//     function awardTokens(address user, uint amount) external onlyOwner {
//         rewards[user] += amount;
//     }

//     function claimTokens() external {
//         require(rewards[msg.sender] > 0, "No rewards to claim.");
//         uint amount = rewards[msg.sender];
//         rewards[msg.sender] = 0;
//         // Lógica para transferir los tokens HTD
//         // ERC20(HTD).transfer(msg.sender, amount);
//     }

//     function checkRewards(address user) external view returns (uint) {
//         return rewards[user];
//     }
// }
