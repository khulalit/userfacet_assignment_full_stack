import React from 'react'
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
export default function 
() {
  return (
    <div className='m-3 p-3'>
        <h4 className='py-2'>Schedule of the Teacher</h4>
          <table className="table table-bordered ">
              <thead>
                  <tr className='py-2'>
                      <strong>Name : </strong> Anu Agarwal
                      <br/>
                      <strong>Email : </strong> anu.agarwal@test.com
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">Monday</th>
                      {
                        availability.monday.map(e=><td>{e.start_time + " " + e.end_time}</td>)
                      }
                  </tr>
                  <tr>
                      <th scope="row">Wednesday</th>
                      {
                        availability.wednesday.map(e=><td>{e.start_time + " " + e.end_time}</td>)
                      }
                  </tr>
                  <tr>
                      <th scope="row">Friday</th>
                      {
                        availability.friday.map(e=><td>{e.start_time + " " + e.end_time}</td>)
                      }
                  </tr>
              </tbody>
          </table>
    </div>
  )
}
