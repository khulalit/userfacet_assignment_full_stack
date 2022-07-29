import React from 'react'
import {useState} from 'react'
const appointement = JSON.parse(`{
    "full_name": "Anu Agarwal",
    "email": "anu.agarwal@test.com",
    "availability": {
      "monday": [
        { "start_time": "9 AM", "end_time": "10 AM" },
        { "start_time": "10 AM", "end_time": "11 AM" },
        { "start_time": "11 AM", "end_time": "12 PM" },
        { "start_time": "2 PM", "end_time": "3 PM" },
        { "start_time": "3 PM", "end_time": "4 PM" },
        { "start_time": "4 PM", "end_time": "5 PM" }
      ],
      "wednesday": [
        { "start_time": "9 AM", "end_time": "10 AM" },
        { "start_time": "10 AM", "end_time": "11 AM" },
        { "start_time": "11 AM", "end_time": "12 PM" },
        { "start_time": "1 PM", "end_time": "2 PM" },
        { "start_time": "2 PM", "end_time": "3 PM" },
        { "start_time": "3 PM", "end_time": "4 PM" },
        { "start_time": "4 PM", "end_time": "5 PM" }
      ],
      "friday": [
        { "start_time": "9 AM", "end_time": "10 AM" },
        { "start_time": "10 AM", "end_time": "11 PM" },
        { "start_time": "11 AM", "end_time": "12 PM" },
        { "start_time": "12 PM", "end_time": "1 PM" },
        { "start_time": "4 PM", "end_time": "5 PM" },
        { "start_time": "5 PM", "end_time": "6 PM" },
        { "start_time": "6 PM", "end_time": "7 PM" }
      ]
    }
}`);
const availability = JSON.parse(`{
    "monday": [
      { "start_time": "9 AM", "end_time": "10 AM" },
      { "start_time": "10 AM", "end_time": "11 AM" },
      { "start_time": "11 AM", "end_time": "12 PM" },
      { "start_time": "2 PM", "end_time": "3 PM" },
      { "start_time": "3 PM", "end_time": "4 PM" },
      { "start_time": "4 PM", "end_time": "5 PM" }
    ],
    "wednesday": [
      { "start_time": "9 AM", "end_time": "10 AM" },
      { "start_time": "10 AM", "end_time": "11 AM" },
      { "start_time": "11 AM", "end_time": "12 PM" },
      { "start_time": "1 PM", "end_time": "2 PM" },
      { "start_time": "2 PM", "end_time": "3 PM" },
      { "start_time": "3 PM", "end_time": "4 PM" },
      { "start_time": "4 PM", "end_time": "5 PM" }
    ],
    "friday": [
      { "start_time": "9 AM", "end_time": "10 AM" },
      { "start_time": "10 AM", "end_time": "11 PM" },
      { "start_time": "11 AM", "end_time": "12 PM" },
      { "start_time": "12 PM", "end_time": "1 PM" },
      { "start_time": "4 PM", "end_time": "5 PM" },
      { "start_time": "5 PM", "end_time": "6 PM" },
      { "start_time": "6 PM", "end_time": "7 PM" }
    ]
  }`)

const onSubmitHander = (e)=>{
    let day = document.querySelector('#weekdays').value
    let start_time = document.querySelector('#slot').value.split('-')[0]
    let end_time = document.querySelector('#slot').value.split('-')[1]
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    const date = new Date(document.querySelector('#date').value);
    if(date.getDay() == 1 ||date.getDay() == 3 ||date.getDay() == 5 ){

        console.log(date.getDay)
        fetch('http:localhost:3000/scheduleclass',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                full_name: name,
                email_address: email,
                weekday: day,
                start_time,
                end_time,
                date
        })
        }).then(res => res.json()).then(data => {
            if(data.slot_confirmed){
                alert("Your slot has been booked")
                document.querySelector('#respone').innerHTML = `
                    ${data.weekday}<br>
                    ${data.end_time}<br>
                    ${data.date}
                `
            }
        })
    }
    else{
        alert("Choose date as per time table ie on monday wed friday")
    }
}
export default function DropDown() {
    const [weekday ,setweekday] = useState('monday');
    const selectHandler = (e)=>{
        setweekday(e.target.value)
    }
  return (
    <div className='mx-4'>
        <div className='p-2'>
            <label>Select Day</label>
            <select name="weekdays" id="weekdays" className='form-select' onChange={selectHandler}>
                <option selected value='friday'>{'Current Day'}</option>
                <option value="monday">Monday</option>
                <option value="wednesday">wednesday</option>
                <option value="friday">Friday</option>
            </select>
        </div>
        <div className='p-2'>
            <label>Select Time Slot</label> 
            <select name= "slot" id = "slot" className='form-select'>
             {availability[weekday].map(e=> {return (<option value={e.start_time +"-"+e.end_time}>{e.start_time +' to '+ e.end_time}</option>)})}
            </select>
        </div>
        <div className='p-2'>
            <div className='form-group my-4'>
                <input name= "name" type="text" id="name" className='form-control' placeholder='Your name'></input >

            </div>
            <div className='form-group my-4'>
                <input name= "email" type="email" id="email" className='form-control' placeholder='Email'></input >
    
            </div>
            <div className='form-group my-4'>
                <label>Choose Day (make sure it falls on monday,wednesday and friday) </label> 
                <input name= "date" type="date" id="date" className='form-control' placeholder='Chosse date '></input >
    
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' onClick={onSubmitHander}>Submit</button>
            </div>
        </div>
        <div className='p-2 m-2' id="response">
            
        </div>
    </div>
  )
}

  
