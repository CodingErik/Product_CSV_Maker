// QUESTIONS 
// ************************************************************
const addItem = [
    {
        name: "sku",
        type: "input",
        message: "what is the sku number for this item? ",
        // validate: validateEntries
    },
    {
        name: "title",
        type: "input",
        message: "what is the name of this product ? ",
        // validate: validateEntries
    },
    {
        name: "hardware",
        type: "list",
        message: "Is this an electronic hardware?",
        choices:
            [
                "yes",
                "no",
            ]
    },
    {
        name: "price",
        type: "input",
        message: "what is the price of this product ? ",
        // validate: validateEntries
    },
];

const nameFileQuestion = [
    {
        name: "fileName",
        type: "input",
        message: "what would you like to call your file? ",
    },
]

module.exports = {
    addItem,
    nameFileQuestion
};
