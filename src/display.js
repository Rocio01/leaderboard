const displayContainer = document.querySelector('.display');
const table = document.createElement('table');
table.className = 'table';

const display = (arr) => {
  table.innerHTML = '';
  arr.forEach((obj) => {
    const { user, score } = obj;
    const tbody = document.createElement('tbody');
    tbody.className = 'px-4';
    table.appendChild(tbody);
    tbody.innerHTML = `
                           <tr scope="row">      
                              <td> ${user}: </td>
                              <td> ${score} </td>
                            </tr>
                      
                      `;

    displayContainer.appendChild(table);
  });
};

export { display as default };