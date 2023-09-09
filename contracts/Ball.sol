// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Ball is Ownable {
    string private name;
    uint256 private maxRegistrations;
    uint256 private registeredCount;
    uint private registrationFee;
    address payable private feeRecipient;

    mapping(address => bool) private _checkedInTickets;
    mapping(address => bool) private registry;

    constructor(
        string memory _name,
        uint256 _initialMaxRegistrations,
        uint256 _registrationFee
    ) {
        name = _name;
        maxRegistrations = _initialMaxRegistrations;
        registeredCount = 0;
        registrationFee = _registrationFee;
        feeRecipient = payable(
            address(0x5cBd3cc653C7F2bE5C9f10D24d280eeD0aD0c9f6)
        );
    }

    function viewName() public view returns (string memory) {
        return name;
    }

    function setRegistrationFee(uint256 _newRegFee) public onlyOwner {
        registrationFee = _newRegFee;
    }

    // Register the wallet address (aka user)
    function register() public payable {
        require(!registry[msg.sender], "Already registered");
        require(registeredCount < maxRegistrations, "Registry limit reached");
        require(msg.value >= registrationFee, "Insufficient payment");
        uint256 feePercentage = (registrationFee * 5) / 100; // Calculate 5% of the registration fee

        registry[msg.sender] = true;
        registeredCount++;

        feeRecipient.transfer(feePercentage);
    }

    // Check if the wallet address is registered
    function isRegistered(address wallet) public view returns (bool) {
        return registry[wallet];
    }

    // Get total registered count
    function totalRegistered() public view returns (uint256) {
        return registeredCount;
    }

    // Check in called by owner
    function checkIn(address _address) public onlyOwner {
        require(registry[_address], "Not registered");
        _checkedInTickets[_address] = true;
    }

    function isCheckedIn() public view returns (bool) {
        return _checkedInTickets[msg.sender];
    }

    // Transfer the remaining balance to the contract owner address of choosing
    function withdraw() public onlyOwner {
        uint256 contractBalance = address(this).balance;
        payable(address(owner())).transfer(contractBalance);
    }
}
