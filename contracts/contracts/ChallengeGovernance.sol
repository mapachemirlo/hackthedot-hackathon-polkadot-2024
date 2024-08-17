// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChallengeGovernance {
    struct ChallengeProposal {
        uint id;
        string description;
        address proposer;
        uint votesFor;
        uint votesAgainst;
        bool accepted;
        bool finalized;
    }

    mapping(uint => ChallengeProposal) public proposals;
    uint public proposalCount;

    // Tracks whether a user has voted on a specific proposal
    mapping(uint => mapping(address => bool)) public votes;

    // Event emitted when a new challenge proposal is created
    event ChallengeProposed(uint id, string description, address proposer);

    // Event emitted when a vote is cast on a proposal
    event VoteCast(uint proposalId, address voter, bool support);

    // Event emitted when a proposal is finalized
    event ProposalFinalized(uint proposalId, bool accepted);

    // Propose a new challenge
    function proposeChallenge(string memory description) public {
        proposalCount++;
        proposals[proposalCount] = ChallengeProposal({
            id: proposalCount,
            description: description,
            proposer: msg.sender,
            votesFor: 0,
            votesAgainst: 0,
            accepted: false,
            finalized: false
        });

        emit ChallengeProposed(proposalCount, description, msg.sender);
    }

    // Vote on an existing proposal
    function vote(uint proposalId, bool support) public {
        require(proposalId > 0 && proposalId <= proposalCount, "Invalid proposal ID");
        require(!votes[proposalId][msg.sender], "You have already voted on this proposal");
        require(!proposals[proposalId].finalized, "Proposal has already been finalized");

        if (support) {
            proposals[proposalId].votesFor++;
        } else {
            proposals[proposalId].votesAgainst++;
        }

        votes[proposalId][msg.sender] = true;

        emit VoteCast(proposalId, msg.sender, support);
    }

    // Finalize the proposal and determine its outcome
    function finalizeProposal(uint proposalId) public {
        require(proposalId > 0 && proposalId <= proposalCount, "Invalid proposal ID");
        require(!proposals[proposalId].finalized, "Proposal has already been finalized");

        ChallengeProposal storage proposal = proposals[proposalId];
        proposal.finalized = true;

        if (proposal.votesFor > proposal.votesAgainst) {
            proposal.accepted = true;
        }

        emit ProposalFinalized(proposalId, proposal.accepted);
    }

    // Get the details of a proposal
    function getProposal(uint proposalId) public view returns (
        uint id,
        string memory description,
        address proposer,
        uint votesFor,
        uint votesAgainst,
        bool accepted,
        bool finalized
    ) {
        require(proposalId > 0 && proposalId <= proposalCount, "Invalid proposal ID");

        ChallengeProposal memory proposal = proposals[proposalId];
        return (
            proposal.id,
            proposal.description,
            proposal.proposer,
            proposal.votesFor,
            proposal.votesAgainst,
            proposal.accepted,
            proposal.finalized
        );
    }
}
