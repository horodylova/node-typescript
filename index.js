import { program } from "commander";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log("Listing all users...");
      break;

    case "get":
      console.log(`Getting user with ID: ${id}`);
      break;

    case "add":
      console.log(`Adding new user with name: ${name}, email: ${email}, phone: ${phone}`);
      break;

    case "remove":
      console.log(`Removing user with ID: ${id}`);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
}

invokeAction(options).catch(err => {
  console.error("Error executing action:", err);
});
