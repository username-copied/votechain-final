//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

contract Voting {


    struct Candidate {
        string candidate_name;
        uint voteCount;
    }

    struct election{
        string election_name;
        uint election_id;
        uint endtime;
        string image;
        address[] voters;
        address[] idToCandidates;
        address[] idToApplicants;
    }

    address[] public jugedApplicants;
    mapping(address=>Candidate) candidates;
    mapping(address=>Candidate) applicants;


    struct Voter {
        address voter_id;
        bool voted;
    }

    struct results{
        string election_name;
        string winner_name;
    }

    //election_authority's address
    address admin;

    constructor(){
        admin = msg.sender;
    }

    election[] public allElections;
    uint public numOfElections = 0;



    function createElection(string memory name,string memory img,uint timeInDays) public{
        require(msg.sender==admin);
        address[] memory add;

        election memory e=election({
            election_name:name,
            election_id:numOfElections,
            image:img,
            endtime:block.timestamp+timeInDays*24*60*60,
            voters:add,
            idToCandidates: add,
            idToApplicants:add
        });
        allElections.push(e);
        ++numOfElections;

    }


    function addApplicant(string memory name, uint elect_id) public{
        address add = msg.sender;
        allElections[elect_id].idToApplicants.push(add);
        applicants[add]=Candidate(name,0);
    }

    function approveApplicant(uint ele_id,uint app_id) public{
        require(msg.sender==admin);
        address applicant = allElections[ele_id].idToApplicants[app_id];
        allElections[ele_id].idToCandidates.push(applicant);
        candidates[applicant]=applicants[applicant];
    }


    function vote( uint elec_id, uint candi_id) public {
        address voter_add = msg.sender;
        allElections[elec_id].voters.push(voter_add);
        candidates[allElections[elec_id].idToCandidates[candi_id]].voteCount++;
    }

    function getApplicant(uint elect_id, uint appl_id) view public returns(string memory){
        bool approved = false;
        for(uint i=0;i<jugedApplicants.length;i++){
            if(jugedApplicants[i]==allElections[elect_id].idToApplicants[appl_id]){
                approved=true;
            }
        }
        if(approved){
            return "None";
        }

        return applicants[allElections[elect_id].idToApplicants[appl_id]].candidate_name;
    }
    function getCandidate(uint elect_id, uint appl_id) view public returns(string memory){
        return candidates[allElections[elect_id].idToCandidates[appl_id]].candidate_name;
    }

    function seeResult(uint elec_id) view public returns(string memory) {        
        uint max = 0;
        for(uint i=0;i<allElections[elec_id].idToApplicants.length;i++){
            if(candidates[allElections[elec_id].idToCandidates[i]].voteCount>candidates[allElections[elec_id].idToCandidates[max]].voteCount){
                max = i;
            }
        }
        return candidates[allElections[elec_id].idToCandidates[max]].candidate_name;
    }

    function getElection(uint eid) view public returns(string memory){
        return allElections[eid].election_name;
    }

    function getElectionImage(uint eid) view public returns(string memory){
        return allElections[eid].image;
    }

    function getNumOfApplicantInElection(uint elect_id) view public returns(uint){
        return allElections[elect_id].idToApplicants.length;
    } 

    function getApplicantLength(uint elect_id) view public returns(uint){
        return allElections[elect_id].idToApplicants.length;
    }

    function getCandidateLength(uint elect_id) view public returns(uint){
        return allElections[elect_id].idToCandidates.length;
    }
}