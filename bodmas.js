
function evaluate(expression) {
    // Remove whitespaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Regular expression to extract numbers, operators, and parentheses
    const re = /(\d+\.?\d*)|([-+*/()])/g;

    // Tokenize the expression
    const tokens = expression.match(re);

    // Operator precedence
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    const operators = [];
    const operands = [];

    // Function to perform an operation
    function performOperation() {
        const operator = operators.pop();
        const b = operands.pop();
        const a = operands.pop();
        switch (operator) {
            case '+':
                operands.push(a + b);
                break;
            case '-':
                operands.push(a - b);
                break;
            case '*':
                operands.push(a * b);
                break;
            case '/':
                operands.push(a / b);
                break;
        }
    }

    // Process each token
    tokens.forEach(token => {
        if (/\d+/.test(token)) {
            // If the token is a number, push it to the operands stack
            operands.push(parseFloat(token));
        } else if (token === '(') {
            // If the token is an opening parenthesis, push it to the operators stack
            operators.push(token);
        } else if (token === ')') {
            // If the token is a closing parenthesis, perform operations until an opening parenthesis is encountered
            while (operators.length && operators[operators.length - 1] !== '(') {
                performOperation();
            }
            operators.pop(); // Pop the opening parenthesis
        } else {
            // If the token is an operator
            while (operators.length && precedence[operators[operators.length - 1]] >= precedence[token]) {
                performOperation();
            }
            operators.push(token);
        }
    });

    // Perform remaining operations
    while (operators.length) {
        performOperation();
    }

    // The result is the only element remaining in the operands stack
    return operands.pop();
}

module.exports = {
    evaluate,
};
