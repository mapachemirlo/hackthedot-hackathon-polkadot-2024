// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChallengeGovernance {
    address public owner;
    mapping(address => bool) public admins;

    event AdminAdded(address indexed admin);
    event AdminRemoved(address indexed admin);
    event ChallengeCreated(uint256 indexed challengeId, string description, address createdBy);
    event ChallengeApproved(uint256 indexed challengeId, address approvedBy);

    struct ChallengeProposal {
        uint256 id;
        string description;
        bool approved;
        address createdBy;
        address approvedBy;
    }

    uint256 public challengeCounter;
    mapping(uint256 => ChallengeProposal) public challenges;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier onlyAdmin() {
        require(admins[msg.sender], "Not an admin");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Owner can add admins
    function addAdmin(address _admin) external onlyOwner {
        admins[_admin] = true;
        emit AdminAdded(_admin);
    }

    // Owner can remove admins
    function removeAdmin(address _admin) external onlyOwner {
        admins[_admin] = false;
        emit AdminRemoved(_admin);
    }

    // Admins can create challenges
    function createChallenge(string memory _description) external onlyAdmin returns (uint256) {
        challengeCounter++;
        challenges[challengeCounter] = ChallengeProposal({
            id: challengeCounter,
            description: _description,
            approved: false,
            createdBy: msg.sender,
            approvedBy: address(0)
        });

        emit ChallengeCreated(challengeCounter, _description, msg.sender);
        return challengeCounter;
    }

    // Admins can approve challenges
    function approveChallenge(uint256 _challengeId) external onlyAdmin {
        ChallengeProposal storage challenge = challenges[_challengeId];
        require(!challenge.approved, "Challenge already approved");

        challenge.approved = true;
        challenge.approvedBy = msg.sender;

        emit ChallengeApproved(_challengeId, msg.sender);
    }

    // Retrieve details of a challenge
    function getChallenge(uint256 _challengeId) external view returns (ChallengeProposal memory) {
        return challenges[_challengeId];
    }
}
