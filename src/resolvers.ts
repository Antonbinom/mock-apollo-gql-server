import fs from "fs";
import { nameTransactionsWithContacts } from "./methods/nameTransactionsWithContacts";

const jsonData = fs.readFileSync("db.json", "utf8");
const data = JSON.parse(jsonData);

const resolvers = {
  Query: {
    allUsers: () => data.users,
    user: (_: undefined, { id }: { id: string }) =>
      data.users.find((user: { id: string }) => user.id == id),
    allTransactions: (_: undefined, { userId }: { userId: string }) => {
      return nameTransactionsWithContacts(
        data.transactions,
        data.users,
        userId
      );
    },
    allUserTransactions: (_: undefined, { userId }: { userId: string }) => {
      const filteredTransactions = data.transactions.filter(
        (transaction: {
          sender: { id: string; name: string };
          recipient: { id: string; name: string };
        }) => {
          if (
            transaction.sender.id == userId ||
            transaction.recipient.id == userId
          ) {
            return transaction;
          }
        }
      );
      return nameTransactionsWithContacts(
        filteredTransactions,
        data.users,
        userId
      );
    },
    transaction: (_: undefined, { id }: { id: string }) =>
      data.transactions.find(
        (transaction: { id: string }) => transaction.id == id
      ),
    allUserContacts: (_: undefined, { userId }: { userId: string }) => {
      const { contacts } = data.users.find(
        (user: { id: string }) => user.id == userId
      );
      return data.users.filter((user: { id: string }) =>
        contacts.includes(user.id)
      );
    },
  },
};

export default resolvers;
