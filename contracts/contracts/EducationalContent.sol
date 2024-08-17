// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EducationalContent {
    mapping(address => bool) public contentCompleted;
    mapping(address => bool) public environmentUnlocked;

    function completeContent() external {
        contentCompleted[msg.sender] = true;
    }

    function unlockEnvironment() external {
        require(contentCompleted[msg.sender], "Complete the content first.");
        environmentUnlocked[msg.sender] = true;
    }

    function isEnvironmentUnlocked(address user) external view returns (bool) {
        return environmentUnlocked[user];
    }
}
