// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ValidationManager is Ownable {
    bytes32 private correctSolution;
    mapping(address => bool) public challengeCompleted;

    function setSolution(string memory solution) public onlyOwner {
        correctSolution = keccak256(abi.encodePacked(solution));
    }

    function validateSolution(string memory solution) external {
        require(!challengeCompleted[msg.sender], "Challenge already completed.");
        if (keccak256(abi.encodePacked(solution)) == correctSolution) {
            challengeCompleted[msg.sender] = true;
        }
    }

    function isChallengeCompleted(address user) external view returns (bool) {
        return challengeCompleted[user];
    }
}
