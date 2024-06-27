        // Function to set a cookie
        function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        // Function to get a cookie
        function getCookie(name) {
            let nameEQ = name + "=";
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i];
                while (cookie.charAt(0) === ' ') {
                    cookie = cookie.substring(1, cookie.length);
                }
                if (cookie.indexOf(nameEQ) === 0) {
                    return cookie.substring(nameEQ.length, cookie.length);
                }
            }
            return null;
        }

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
                        saveCheckboxStates();
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

            
            loadCheckboxStates();
        }
        
        function updateProbabilities() {
            let totalProbability = 0;

            const checkboxes = document.querySelectorAll("#itemTable tbody input[type='checkbox']");

            checkboxes.forEach((item, index) => {
                const probabilityCell = document.querySelector(`#itemTable tbody tr:nth-child(${index + 1}) .probability`);
                if (!checkboxes[index].checked) {
                    totalProbability += allItems[index].probability;
                }
            });

            checkboxes.forEach((item, index) => {
                const probabilityCell = document.querySelector(`#itemTable tbody tr:nth-child(${index + 1}) .probability`);
                if (!checkboxes[index].checked) {
                    probabilityCell.textContent = (allItems[index].probability / totalProbability * 100).toFixed(4)+"%";
                }
            });

            document.querySelector("#totalProbability").textContent = totalProbability.toFixed(4)+"%";
        }

        // Function to save checkbox states to cookie
        function saveCheckboxStates() {
            const checkboxes = document.querySelectorAll("#itemTable tbody input[type='checkbox']");
            let checkedIndexes = [];
            checkboxes.forEach((checkbox, index) => {
                if (checkbox.checked) {
                    checkedIndexes.push(index);
                }
            });
            setCookie('checkedIndexes', JSON.stringify(checkedIndexes), 30); // Save for 30 days
        }

        // Function to load checkbox states from cookie
        function loadCheckboxStates() {
            const checkedIndexes = JSON.parse(getCookie('checkedIndexes')) || [];
            const checkboxes = document.querySelectorAll("#itemTable tbody input[type='checkbox']");
            
            checkboxes.forEach((checkbox, index) => {
                checkbox.checked = checkedIndexes.includes(index);
            });

            updateProbabilities(); // Update probabilities after loading states
        }

        // Event listener for select box changes
        document.getElementById('selectBox').addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue !== '') {
                start(selectedValue);
                saveSelectBoxValue(selectedValue);
            }
        });

        // Function to save select box value to cookie
        function saveSelectBoxValue(value) {
            setCookie('selectedOption', value, 30); // Save for 30 days
        }

        // Function to load select box value from cookie
        function loadSelectBoxValue() {
            const selectedOption = getCookie('selectedOption');
            if (selectedOption) {
                document.getElementById('selectBox').value = selectedOption;
            }
        }

        // Load initial select box value and checkbox states on page load
        window.addEventListener('load', function() {
            loadSelectBoxValue();
            loadCheckboxStates();
        });

        // Initial start based on loaded select box value
        const initialSelectedOption = getCookie('selectedOption');
        if (initialSelectedOption && initialSelectedOption !== '') {
            document.getElementById('selectBox').value = initialSelectedOption;
            start(initialSelectedOption);
        }