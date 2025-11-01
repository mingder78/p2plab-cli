import { Command } from 'commander';

/**
 * Defines the user management commands.
 * @param program The main Commander program instance.
 */
export function registerUserCommand(program: Command): void {
  const userCommand = program.command('user')
    .description('Manage user accounts');

  // Sub-command: user create
  userCommand.command('create <username>')
    .description('Create a new user account')
    .option('-e, --email <email>', 'Specify the user\'s email address')
    .action((username: string, options: { email?: string }) => {
      console.log(`Creating user: ${username}`);
      if (options.email) {
        console.log(`Email: ${options.email}`);
      } else {
        console.log('No email provided.');
      }
      // Add actual user creation logic here (e.g., API call, database insert)
    });

  // Sub-command: user delete
  userCommand.command('delete <username>')
    .description('Delete a user account')
    .action((username: string) => {
      console.log(`Deleting user: ${username}`);
      // Add actual user deletion logic here
    });
}

