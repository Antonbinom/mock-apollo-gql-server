import fs from "fs";

// interface User {
//   id: string;
//   name: string;
//   password: string;
//   image?: string;
//   balance?: string;
//   description?: string;
//   contacts: string[] | [];
// }

// interface Transaction {
//   id: string;
//   amount: number;
//   debit: number;
//   message?: string;
//   sender: {
//     id: string;
//     name: string | "";
//   };
//   recipient: {
//     id: string;
//     name: string | "";
//   };
//   created_at: string;
// }

// const jsonData = fs.readFileSync("db.json", "utf8");
// export const data: { users: any; transactions: any } = JSON.parse(jsonData);

const data = JSON.parse(fs.readFileSync("db.json", "utf8"));
