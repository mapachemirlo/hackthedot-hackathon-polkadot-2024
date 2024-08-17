// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./HackTheDotToken.sol";
import "./ChallengeGovernance.sol";

contract ChallengeManager {
    ChallengeGovernance public governanceContract;
    HackTheDotToken public tokenContract;

    struct Challenge {
        uint256 id;
        string description;
        bool completed;
        address solver;
    }

    mapping(uint256 => Challenge) public challenges;
    mapping(address => uint256[]) public userChallenges;

    event ChallengeCompleted(uint256 indexed challengeId, address indexed solver);
    event ChallengeRewarded(uint256 indexed challengeId, address indexed solver, uint256 reward);

    constructor(address _governanceContract, address _tokenContract) {
        governanceContract = ChallengeGovernance(_governanceContract);
        tokenContract = HackTheDotToken(_tokenContract);
    }

    function submitSolution(uint256 _challengeId, address _solver) external {
        ChallengeGovernance.ChallengeProposal memory challenge = governanceContract.getChallenge(_challengeId);
        require(challenge.approved, "Challenge is not approved");

        challenges[_challengeId] = Challenge({
            id: _challengeId,
            description: challenge.description,
            completed: true,
            solver: _solver
        });

        userChallenges[_solver].push(_challengeId);

        emit ChallengeCompleted(_challengeId, _solver);
    }

    function rewardSolver(uint256 _challengeId, uint256 _reward) external {
        Challenge storage challenge = challenges[_challengeId];
        require(challenge.completed, "Challenge is not completed");

        tokenContract.mint(challenge.solver, _reward);

        emit ChallengeRewarded(_challengeId, challenge.solver, _reward);
    }

    function getUserChallenges(address _user) external view returns (uint256[] memory) {
        return userChallenges[_user];
    }

    function getChallenge(uint256 _challengeId) external view returns (Challenge memory) {
        return challenges[_challengeId];
    }
}
