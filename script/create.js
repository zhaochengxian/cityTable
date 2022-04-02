const inquirer = require("inquirer");
const { exec } = require('child_process');
const callBack = (version) => {
    console.log(`${version}版本切换成功,正在进行发包构建...`); exec(`yarn lib`, () => {
        console.log("发包构建成功")
    })
}
inquirer
    .prompt([
        {
            type: "rawlist",
            message: "Please pick a vue version",
            name: "version",
            default: "Vue2",
            prefix: "☆☆☆☆",
            suffix: "****",
            choices: ["Vue2", "Vue3"],
            filter: function (val) {
                return val;
            },
        },
    ])
    .then((answer) => {
        const { version } = answer
        if (version === "Vue2") {
            exec(`yarn add vue@2.6.14`, () => {
                callBack("Vue2")
            })
        } else if (version === "Vue3") {
            exec(`yarn add vue@next`, () => {
                callBack("Vue3")
            })
        }
    });
