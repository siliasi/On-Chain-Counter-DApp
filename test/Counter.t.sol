// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
        // Our Counter contract initializes 'count' to 0 by default, so no need to set it explicitly
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.count(), 1); // Access the 'count' state variable using the getter function
    }

    // We don't have a setNumber function in our Counter contract,
    // so this test case would need to be removed or modified
    // function testFuzz_SetNumber(uint256 x) public {
    //     counter.setNumber(x);
    //     assertEq(counter.number(), x);
    // }

    function test_Decrement() public {
        counter.increment(); // Increment once to have a value to decrement
        counter.decrement();
        assertEq(counter.count(), 0);
    }

    function test_DecrementBelowZero() public {
        counter.decrement(); // Try to decrement when count is 0
        assertEq(counter.count(), 0); // Should remain 0 due to the check in the decrement function
    }
}