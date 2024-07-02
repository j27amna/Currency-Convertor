#! usr/bin/env node
import inquirer from "inquirer";
let condition = true;
while (condition) {
    const currency = {
        USD: 1,
        PalestinianShekel: 3.75,
        EUR: 0.93,
        GBP: 0.80,
        CAD: 1.37,
        AUD: 1.53,
        JPY: 156.92,
        CHF: 0.91,
        CNY: 7.24,
        INR: 83.42,
        PKR: 278.42,
        TRY: 32.28,
        KRW: 1380.38,
        BDT: 109.79,
    };
    let userAns = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter Name: "
        },
        {
            name: "from",
            type: "list",
            message: "Enter currency you want to convert from : ",
            choices: ['USD', 'PalestinianShekel', 'EUR', 'GBP', 'CAD',
                'AUD', 'JPY', 'CHF', 'CNY', 'INR',
                'PKR', 'TRY', 'KRW', 'BDT']
        },
        {
            name: "to",
            type: "list",
            message: "Enter currency you want to convert to : ",
            choices: ['USD', 'PalestinianShekel', 'EUR', 'GBP', 'CAD',
                'AUD', 'JPY', 'CHF', 'CNY', 'INR',
                'PKR', 'TRY', 'KRW', 'BDT']
        },
        {
            name: "amount",
            type: "input",
            message: "Enter Your Amount : "
        }
    ]);
    // curreny user wants to convert from 
    let fromAmount = currency[userAns.from];
    // currency user wants to convert to
    let toAmount = currency[userAns.to];
    // The amount user have
    let userAmount = userAns.amount;
    // dividing amount by from amount to get base amount
    let baseAmount = userAmount / fromAmount;
    //  multiplying base amount by 'to' amount to convert rates
    let convertedAmount = baseAmount * toAmount;
    console.log(`Dear ${userAns.name}, Your desired amount is "${convertedAmount}" OR "${Math.floor(convertedAmount)}"`);
    let userAns2 = await inquirer.prompt({
        name: "ques",
        type: "confirm",
        message: "Do You Wanna Convert Currency Again?",
        default: "false"
    });
    condition = userAns2.ques;
}
;
