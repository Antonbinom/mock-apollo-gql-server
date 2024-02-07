export const nameTransactionsWithContacts = (
  transactions: any,
  users: any,
  userId: string
) => {
  return transactions.map(
    (transaction: {
      sender: { id: string; name: string };
      recipient: { id: string; name: string };
    }) => {
      const senderName = users.find(
        (user: { id: string }) => user.id == transaction.sender.id
      ).name;
      const recipientName = users.find(
        (user: { id: string }) => user.id == transaction.recipient.id
      ).name;
      const contacts = users.find(
        (user: { id: string }) => user.id == userId
      ).contacts;

      if (contacts.includes(transaction.sender.id))
        transaction.sender.name = senderName;
      if (contacts.includes(transaction.recipient.id))
        transaction.recipient.name = recipientName;

      if (transaction.recipient.id == userId) transaction.recipient.name = "me";
      if (transaction.sender.id == userId) transaction.sender.name = "me";

      return transaction;
    }
  );
};
