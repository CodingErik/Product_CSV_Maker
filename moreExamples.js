// these functions work in tangent with some of the functions that are in app.js
// any function stated here that is not declared in this file will be in app.js
// I will let you debug this code ;)
// have fun! 

// async method 
async function converter() {

    let data = await CSVToJSON().fromFile('./source.csv');

    let newJson = addDataToArray(data, {
        sku: '12345',
        title: 'Legend Of Zelda',
        hardware: 'Nintendo Switch',
        price: '15.99'
    }); 

    let newCsv = json2csv(newJson, { fields: ["sku", "title", "hardware", "price"] });

    writeToFile(newCsv, 'erikFile'); 


}

// .then method 
const getData = () => CSVToJSON().fromFile('./source.csv')
    .then((data) => {
        addDataToArray(data, {
            sku: '12345',
            title: 'Legend Of Zelda',
            hardware: 'Nintendo Switch',
            price: '15.99'
        });
        let csv = json2csv(data, { fields: ["sku", "title", "hardware", "price"] });
        writeToFile(csv, 'newFile')
    });

const addDataToArray = (data, userInput) => {
    data.push(userInput)
    return data; 
};