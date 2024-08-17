// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LevelManager {
    mapping(address => uint) public userLevel;

    function advanceLevel(address user) external {
        userLevel[user]++;
    }

    function getCurrentLevel(address user) external view returns (uint) {
        return userLevel[user];
    }
}
