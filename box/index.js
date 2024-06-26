

let allItems = [];
let highItemsIdx = 0;

    function start(json){
        allItems = [];
        highItemsIdx = 0;
        fetch(json)
            .then(response => response.json())
            .then(data => {
                allItems = [...data.high, ...data.low];
                highItemsIdx = data.high.length;
                
                createTable(allItems);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

        function createTable(data) {
            const tableBody = document.querySelector("#itemTable tbody");
            tableBody.innerHTML = '';

            data.forEach((item, index) => {
                const row = document.createElement("tr");
                
                const checkboxCell = document.createElement("td");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.dataset.index = index;

                if (index < highItemsIdx) {
                    checkbox.addEventListener("change", () => {
                        updateProbabilities();
                    });
                    checkboxCell.appendChild(checkbox);
                    row.appendChild(checkboxCell);
                } else {
                    const checkbox2 = document.createElement("input");
                    checkbox2.type = "checkbox";
                    checkbox2.disabled = true;

                    checkboxCell.appendChild(checkbox2);
                    row.appendChild(checkboxCell);
                }

                const nameCell = document.createElement("td");
                nameCell.textContent = item.item;
                row.appendChild(nameCell);
                
                const probabilityCell = document.createElement("td");
                probabilityCell.textContent = item.probability+"%";
                probabilityCell.className = 'probability';
                row.appendChild(probabilityCell);

                tableBody.appendChild(row);
            });

            updateTotalProbability();
        }
        
        function updateProbabilities() {
            var totalProbability = 0;

            const checkboxes = document.querySelectorAll("#itemTable tbody input[type='checkbox']");

            checkboxes.forEach((item, index) => {
                const probabilityCell = document.querySelector(`#itemTable tbody tr:nth-child(${index + 1}) .probability`);
                if (checkboxes[index].checked) {
                    probabilityCell.textContent = 0;
                } else {
                    totalProbability += allItems[index].probability;
                }
            });

            checkboxes.forEach((item, index) => {
                const probabilityCell = document.querySelector(`#itemTable tbody tr:nth-child(${index + 1}) .probability`);
                if (checkboxes[index].checked) {
                } else {
                    probabilityCell.textContent = (allItems[index].probability / totalProbability * 100).toFixed(4)+"%";
                }
            });

            document.querySelector("#totalProbability").textContent = totalProbability.toFixed(4)+"%";
        }