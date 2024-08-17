// contracts/HintManager.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract HintManager is Ownable {
    mapping(uint256 => string) public hints;
    uint256 public hintCount;

    event HintAdded(uint256 indexed hintId, string hint);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function addHint(string memory hint) external onlyOwner {
        hintCount++;
        hints[hintCount] = hint;
        emit HintAdded(hintCount, hint);
    }

    function getHint(uint256 hintId) external view returns (string memory) {
        return hints[hintId];
    }
}

// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

// contract HintManager is Ownable {
//     mapping(uint => string) public hints;

//     function setHint(uint challengeId, string memory hint) public onlyOwner {
//         hints[challengeId] = hint;
//     }

//     function getHint(uint challengeId) public view returns (string memory) {
//         return hints[challengeId];
//     }
// }
