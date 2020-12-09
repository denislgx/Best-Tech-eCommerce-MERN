import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Ernest Hemingway",
        email: "ehemingway@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Anne Carson",
        email: "acarson@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
