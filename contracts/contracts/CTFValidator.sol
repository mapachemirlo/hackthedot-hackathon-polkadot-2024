// contracts/CTFValidator.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CTFValidator is Ownable {
    mapping(address => bool) public validated;

    event ValidationSuccessful(address indexed validator);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function validate() external onlyOwner {
        require(!validated[msg.sender], "Already validated");
        validated[msg.sender] = true;
        emit ValidationSuccessful(msg.sender);
    }

    function isValidated(address user) external view returns (bool) {
        return validated[user];
    }
}

// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

// contract CTFValidator is Ownable {
//     mapping(uint => bytes32) private challengeFlags;
//     mapping(uint => bool) public challengeCompleted;
//     address public winner;

//     function setFlag(uint challengeId, string memory flag) public onlyOwner {
//         challengeFlags[challengeId] = keccak256(abi.encodePacked(flag));
//     }

//     function submitFlag(uint challengeId, string memory flag, address team) external {
//         require(!challengeCompleted[challengeId], "Challenge already completed.");
//         if (keccak256(abi.encodePacked(flag)) == challengeFlags[challengeId]) {
//             challengeCompleted[challengeId] = true;
//             winner = team;
//         }
//     }

//     function isChallengeCompleted(uint challengeId) external view returns (bool) {
//         return challengeCompleted[challengeId];
//     }
// }
