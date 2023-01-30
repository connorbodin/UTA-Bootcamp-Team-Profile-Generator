const inquirer = require('inquirer');
const teamMembers = [];





const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the the manager?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the ID number of the manager?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email of the the manager?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the office number of the the manager?'
        },


    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.mangerOffice);
        teamMembers.push(manager);
    });
};

managerPrompt();

console.log(teamMembers)

