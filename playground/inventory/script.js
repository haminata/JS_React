 const inventoryData = [
     {
         id: "1",
         productName: "Benadryl",
         description: "Allergy, one a day",
         unitAmount: "10 mg",
         status: "100%",
         amountOfTablets: 30,
         currency: "£",
         price:10,
         dateAdded: "",
         totalSold: 0 ,
         serialNumber: "3574661253848",
         image: ""
     }, {
         id: "2",
         productName: "Ferrous Fumarate",
         description: "Food supplement",
         unitAmount: "210 mg",
         status: "100%",
         amountOfTablets:84,
         currency: "£",
         price:10,
         dateAdded: "",
         totalSold: 0 ,
         serialNumber: "5060135170684",
         image: ""
     }, {
         id: "3",
         productName: "Coartem 80/480",
         description: "Artemether/Lumefantrine",
         unitAmount: "80 mg, 480 mg",
         status: "100%",
         amountOfTablets:6,
         currency: "£",
         price:10,
         dateAdded: "",
         totalSold: 0 ,
         serialNumber: "",
         image: ""
     }, {
         id: "4",
         productName: "Nurofen Express",
         description: "liquid Capsules, Targets pain fast, Ibuprofen",
         unitAmount: "200 mg ",
         status: "100%",
         amountOfTablets:16,
         currency: "£",
         price:10,
         dateAdded: "",
         totalSold: 0 ,
         serialNumber: "500158100718",
         image: ""
     }, {
         id: "5",
         productName: "Lemsip",
         description: "Cold & Flue Lemon, paracetamol",
         unitAmount: "650 mg, 10mg ",
         status: "100%",
         amountOfTablets:10,
         currency: "£",
         price:10,
         dateAdded: "",
         totalSold: 0 ,
         serialNumber: "5000158063914",
         image: ""
     }, {
         id: "6",
         productName: "Lymecycline ",
         description: "Capsules, hard, Keep out of the sight and reach of children, store below 25C",
         unitAmount: "408 mg",
         status: "100%",
         amountOfTablets:28,
         currency: "£",
         price:10,
         dateAdded: "",
         totalSold: 0 ,
         serialNumber: "5017007602927",
         image: ""
     }
];

const createTableRowElem = (data, rowNum)=> {
    const isInstock = true;
    const elemTr = document.createElement("tr");
    const headers = document.querySelectorAll('#table-headers th');
    let html = ` <td ><input type="checkbox" /></td>
                <th scope="row">${rowNum}</th>`;

    for (const header of headers) {
        const propertyName = header.dataset.key;

        if(!propertyName) {
            continue;
        }

        if (propertyName === 'inStock'){
            html += `<td>${isInstock}</td>`
        }else {

            html += `<td>${data[propertyName]}</td>`
        }
    }

    elemTr.innerHTML = html;

return elemTr;
}

 window.addEventListener('DOMContentLoaded', (event) => {
     console.log('DOM fully loaded and parsed');
     const tBody = document.getElementById("table-data");

     inventoryData.forEach((data,index) => {
         const trElem = createTableRowElem(data, index + 1);
         tBody.appendChild(trElem);
     })
 });
