// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract HintManager is Ownable {
    mapping(uint => string) public hints;

    function setHint(uint challengeId, string memory hint) public onlyOwner {
        hints[challengeId] = hint;
    }

    function getHint(uint challengeId) public view returns (string memory) {
        return hints[challengeId];
    }
}
