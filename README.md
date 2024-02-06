# BODMAS Rule Evaluation Library

This library provides a function to evaluate mathematical expressions following the BODMAS (Brackets, Orders, Division and Multiplication, Addition and Subtraction) rule.

## Installation

You can install the library using npm:

```bash
npm install bodmas-rule


Usage

const bodmas = require('bodmas-rule');

const result = bodmas.evaluate('2 + 3 * (5 - 1)');
console.log(result); // Output: 14


API
evaluate(expression: string): number
Evaluates the given mathematical expression and returns the result.

expression: The expression to evaluate.