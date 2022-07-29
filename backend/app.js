const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json())
const option= {
    origin: 'http://localhost:3000'
  }
app.use(cors(option))

const appointement = `{
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
}`
let booking = [{day : "", date : "", slot : {start: "", end : "", status : ""}, nameofstudent : ""}]
const appoitment_ob = JSON.parse(appointement)
app.get('/',(req,res)=>{
    console.log(appoitment_ob.full_name)
    res.send(appointement)
})
app.post('/scheduleclass',(req,res)=>{
    const fullname = req.body.fullname;
    const weekday = req.body.weekday;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const date = req.body.date;
    if(appointement_ob.availability.hasOwnKey(weekday)){
        appointement_ob.availability[weekday].forEach(element => {
            if(element.start_time == startTime && element.end_time == endTime){
                booking.forEach(e=>{
                  if(e.day == 'weekday' && e.date == date && e.slot.start == startTime && e.slot.end == endTime){
                      booking.push({
                        day : weekday,
                        date : date,
                        slot: {
                          start : startTime,
                          end : endTime,
                          status : "booked"
                        },
                        nameofstudent : fullname
                      })
                  }

                  res.json([{
                      slot_confirmed : true,
                      weekday: weekday,
                      start_time : startTime,
                      end_time : endTime,
                      date : date
                    }])
                })
            }
        });
    }

});
app.listen(8080,()=>{
    console.log("Serving at portno 8080")
})