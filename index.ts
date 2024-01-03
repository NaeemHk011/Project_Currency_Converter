import inquirer from "inquirer";


let converstion = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0036,
        "SR": 0.013,
    }, "USD": {
        "USD": 1,
        "PKR": 278.98,
        "SR": 3.75,
    }, "SR": {
        "USD": 0.27,
        "PKR": 74.39,
        "SR": 1,
    },
};

const answers: {
    from: "PKR" | "USD" | "SR",
    to: "PKR" | "USD" | "SR",
    amount: number,
} = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Select your Currency",
    choices: ["PKR", "USD", "SR"],
}, {
    type: "list",
    name: "to",
    message: "select conversion currency",
    choices: ["PKR", "USD", "SR"],
}, {
    type: "number",
    name: "amount",
    message: "Enter amount you want to convert",
},
])

const { from, to, amount } = answers;
if (from && to && amount) {
    const result = converstion[from][to] * amount;
    console.log(`Your Conversion Amount ${from} is converted in ${to} and Amount is: ${result} in ${to} `)
} else {
    console.log("Please enter valid input");
}