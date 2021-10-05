const display = (obj) => {
  const displayContainer = document.querySelector('.display');
  const table = document.createElement('table');
  table.className = 'table table-striped';
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  tbody.innerHTML = `
                         <tr scope="row">      
                            <td> ${obj.name}: ${obj.score}</td>
                          </tr>
                    
                    `;

  displayContainer.appendChild(table);
};

export { display as default };