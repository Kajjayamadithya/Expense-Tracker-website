let table=document.getElementById('table')
            console.log("Table:",table);
            function deleteRow(row)
            {
                console.log(row);
                row.remove();
            }
            function addRow()
            {
                let date = document.querySelector('.datein input').value;
                let amount = document.querySelector('.amountin input').value;
                let transactionType=document.getElementsByClassName('transactionType')[0].value;
                let row=document.createElement('tr')
                let amountCell=document.createElement('td')
                amountCell.innerText=amount;
                let transactionCell=document.createElement('td')
                transactionCell.innerText=transactionType;
                let dateCell=document.createElement('td')
                dateCell.innerText=date;
                let binCell=document.createElement('td')
                let deleteButton=document.createElement('button')
                let binImage=document.createElement('img')
                binImage.src='./cross symbol.png'
                binImage.style.width='40px'
                binImage.style.height='40px'
                deleteButton.appendChild(binImage)
                deleteButton.classList.add('delete-button')
                deleteButton.onclick=()=>deleteRow(row)
                binCell.appendChild(deleteButton);
                row.appendChild(amountCell)
                row.appendChild(transactionCell)
                row.appendChild(dateCell)
                row.appendChild(binCell)
                table.appendChild(row)
                let totalIncome=document.getElementById('totalIncome').innerText
                let totalExpense=document.getElementById('expense').innerText
                let balance=document.getElementById('balance').innerText
                if(transactionType=='Income')
                {
                    if(totalIncome=='0')
                    {
                        document.getElementById('totalIncome').innerText=amount
                    }
                    else
                    {
                        document.getElementById('totalIncome').innerText=parseInt(totalIncome)+parseInt(amount)
                    }
                    if(balance=="0")
                    {
                        document.getElementById('balance').innerText=amount
                    }
                    else
                    {
                        document.getElementById('balance').innerText=parseInt(balance)+parseInt(amount) 
                    }
                }
                else if(transactionType=="Expense")
                {
                    if(totalExpense=="0")
                    {
                        document.getElementById('expense').innerText=amount
                    }
                    else
                    {
                        document.getElementById('expense').innerText=parseInt(totalExpense)+parseInt(amount)
                    }
                    if(balance=="0")
                    {
                        document.getElementById('balance').innerText=amount
                    }
                    else
                    {
                        document.getElementById('balance').innerText=parseInt(balance)-parseInt(amount) 
                    }
                }
                console.log(totalIncome,totalExpense,balance)
            }