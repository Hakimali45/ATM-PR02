
import inquirer  from "inquirer";

let totalBalance: number = 10000
const pinNumber: number = 4554

let pinEntered = await inquirer.prompt(
    [
        {

            name: "pin",
            message: "Enter your pin number",
            type: "number",

        }
    ]
)
// console.log(pinEntered.pin)

if(pinEntered.pin == pinNumber){

    let atmQuestions = await inquirer.prompt([
        {
            name: "accountType",
            message: "Enter your account type",
            type: "list",
            choices: [
                "Current Account",
                "Savings Account",
            ]
        },
        {
            name: "transMethod",
            message: "Select your transaction method",
            type: "list",
            choices: [
                "Cash Withdrawal",
                "Fast Cash"
            ]
        }

    ]);
if(atmQuestions.transMethod == "Cash Withdrawal")
{

    let cashwithdrawAmount = await inquirer.prompt([
            {
              name: "withdrawal",
              message: "Enter the amount you want to withdraw",
              type: "number",

        }
    ]);
//Greater then or equals to operator
   if(totalBalance >= cashwithdrawAmount.withdrawal)
 {
    totalBalance -= cashwithdrawAmount.withdrawal // totalBalance = totalBalance - cashwithdrawamount
    console.log(`Your Total Balance is :${totalBalance}`)

    }else
    (console.log(`Insufficient Balance`)
    )
}else{
    let fastCashAmount = await inquirer.prompt(
        [
            {
                name: "fastCash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: [
                    "1000",
                    "2500",
                    "5000",
                    "10000"
                ]
            }
        ]
    )
    if(totalBalance >= fastCashAmount.fastCash){
        totalBalance -= fastCashAmount.fastCash // totalBalance = totalBalance - cashwithdrawAmount
        console.log(`Your total balance is :${totalBalance}`)
    }
    else(
        console.log(`Insufficient Balance`)
    )
}
}
