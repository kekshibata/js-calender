const year = document.getElementById("year").value
const month = document.getElementById("month").value
const day = document.getElementById("day").value
const button = document.getElementById("make")

const output = document.getElementById("calendar")

button.addEventListener("click", getCalender(year, month, day))

function getCalender(year, month, day) {
    const date = new Date(year, month + 1, day).getDate()
    const startDay = new Date(year, month + 1, 1).getDay()
    const endDate = new Date(year, month + 1, 0).getDate()
    const rows_count = Math.ceil((startDay + endDate) / 7)

    let innerHtml = ''
    let days_count = 0

    for (let i = 0; i < rows_count; i ++) {
        innerHtml += '<tr>'
        for (let j = 0; j < 7; j++) {
            if(i === 0) {
                if(j < startDay) {
                    innerHtml += "<td></td>";
                } else {
                    days_count ++;
                    days_count === date ? 
                        innerHtml += `<td class="highlight">${days_count}</td>`
                        : innerHtml += `<td>${days_count}</td>`
                }
            } else {
                if (days_count > endDate) {
                    innerHtml += "<td></td>";
                } else {
                    days_count ++;
                    days_count === date ? 
                        innerHtml += `<td class="highlight">${days_count}</td>`
                        : innerHtml += `<td>${days_count}</td>`
                }
            }         
        }
        innerHtml += "</tr>"
    }
    
    output.insertAdjacentHTML("beforeend", innerHtml); 
}

console.log(getCalender(2022, 0, 26))

