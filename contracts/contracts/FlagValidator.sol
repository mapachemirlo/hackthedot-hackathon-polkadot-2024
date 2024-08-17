// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract FlagValidator is Ownable {
    mapping(uint => bytes32) private challengeFlags;
    mapping(address => mapping(uint => bool)) public flagSubmitted;

    function setFlag(uint challengeId, string memory flag) public onlyOwner {
        challengeFlags[challengeId] = keccak256(abi.encodePacked(flag));
    }

    function submitFlag(uint challengeId, string memory flag) external {
        require(!flagSubmitted[msg.sender][challengeId], "Flag already submitted.");
        if (keccak256(abi.encodePacked(flag)) == challengeFlags[challengeId]) {
            flagSubmitted[msg.sender][challengeId] = true;
        }
    }

    function isFlagSubmitted(address user, uint challengeId) external view returns (bool) {
        return flagSubmitted[user][challengeId];
    }
}
