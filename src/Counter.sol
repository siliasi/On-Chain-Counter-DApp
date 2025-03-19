// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Counter {
    uint256 public count;

    function getCount() public view returns (uint256) {
        return count;
    }

    function increment() public {
        count++;
    }

    function decrement() public {
        if (count > 0) {
            count--;
        }
    }
}