const CSVToJSON = require('csvtojson');
const json2csv = require('json2csv').parse;
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions'); 

// this program make a new csv file base on your input! 

const addDataToArrayForClosure = (data, userInput) => {
    // after pushing the data you need 
    data.push(userInput)

    // return a function that takes in a name for your new file  
    return function (nameOfNewFile, ) {
        // conver the file 
        let newCsv = jsonToCsv(data)
        // write the new file 
        writeToFile(newCsv, nameOfNewFile)
    }
};
const jsonToCsv = (json) => json2csv(json, { fields: ["sku", "title", "hardware", "price"] })
const writeToFile = (input, nameOfFile) => fs.writeFileSync(`.${nameOfFile}.csv`, input)

// async method with closure  
async function converter2(newItem) {

    let data = await CSVToJSON().fromFile('./source.csv');
 
    let newCsvFile = addDataToArrayForClosure(data, newItem); 

    //name the csv file 
    return newCsvFile 
}

// converter2(); 
async function start(){
    let a = await inquirer.prompt(questions.addItem);
    let nameNewCSVFile = await converter2(a)
    let name = await inquirer.prompt(questions.nameFileQuestion); 
    nameNewCSVFile(name.fileName)
    console.log('Your new CSV file is has been written!')
}

start(); 

