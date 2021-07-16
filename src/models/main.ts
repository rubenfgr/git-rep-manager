'use strict';
import inquirer from 'inquirer';
import { showHeader } from '../helpers/header';

const showMainMenu = () => {
  showHeader('Seleccione una opción');
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'theme',
        message: 'What do you want to do?',
        choices: [
          'Order a pizza'.green,
          'Make a reservation',
          new inquirer.Separator(),
          'Ask for opening hours',
          {
            name: 'Contact support',
            disabled: 'Unavailable at this time'
          },
          'Talk to the receptionist'
        ]
      },
      {
        type: 'list',
        name: 'size',
        message: 'What size do you need?',
        choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
        filter(val: any) {
          return val.toLowerCase();
        }
      }
    ])
    .then((answers) => {
      console.log(JSON.stringify(answers, null, ' '));
    });
};

export { showMainMenu };
