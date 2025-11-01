#!/usr/bin/env bun
import { Command } from 'commander';
import { registerUserCommand } from './commands/user';
import * as packageJson from '../package.json'; // Import package.json to get version
import chalk from "chalk";

const program = new Command();

const binName: string =
  (packageJson.bin && Object.keys(packageJson.bin).length > 0
    ? Object.keys(packageJson.bin)[0]
    : 'p2plab') as string;

program
  .version(packageJson.version)
  .name(binName)
  .description(packageJson.description)
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
        if (options.name) {
          console.log(chalk.blue(`Hey, ${options.name}!`));
          console.log(chalk.green("This is a success message!"));
          console.log(chalk.red("This is an error message!"));
        } else {
          console.log(chalk.yellow("Please use --help to get help."));
        }
      });

// Register subcommands
registerUserCommand(program);

// Native commands
program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse(process.argv);
