const Weekday = [
    'Sunday','Monday','TuesDay','WednesDay','Thursday','Friday','Saturday'
]
const date = new Date().getDay();





const Time = () => {
    const date = new Date()
    const timeInMilliseconds = date.getTime()
    console.log(getTime)

    document.getElementById('getTime').textContent = timeInMilliseconds
}
    

const currentDate = (Weekday[date])

document.getElementById('date').innerHTML =   currentDate;


setInterval(Time,1000)