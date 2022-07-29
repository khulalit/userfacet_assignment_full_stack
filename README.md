# userfacet_assignment_full_stack
## Assignment Task
Role: Full Stack Developer
Assignment 
(9.30 am - 1 pm , 29th July 2022 )
Instructions
Allotted time : 10 minutes reading time + 3 hours for execution + 20 minutes for submission
No submission will be considered post 1 pm. Kindly manage your time wisely.
Refrain from adopting unfair means during the test.
Requirements
You are expected to use React, keeping in mind that the website doesn’t waste user’s time in terms of usability (page load time, performance etc).
You may use any ready made styling libraries like MaterialUI, Bootstrap etc. You can come up with your own styling, or use some like tailwind css as well.
The website should be responsive, i.e. adaptable for mobile as well as for desktops.
You can use either Django or Express.JS for writing the Backend APIs.
Use OOPs concepts wherever possible
Follow general coding guidelines for syntax, code formatting etc.
Evaluation Standards
We would be looking for -
Completion of features
Code Quality
Modularity & Separation of concerns 
UI/UX Sense
Internal test cases that the API passes

Backend Task
Consider there is a teacher who wants to teach students online. The teacher has specified their availability for the weekdays.  You will be given the availability for a teacher in a JSON file.
The teacher now wants to accept requests for a class from the students. In response to each request the teacher wants to reply with a date and the time slot for which the class is scheduled. Your task is to give the students a way to book classes. That can be divided into the following sub-tasks:
Create a Django/Express.JS application for this task
Read the teacher_availability.json file given to you in memory.
Create an API Endpoint on which the student can send a POST Request to schedule a class.
The request will contain the student's name, email address and their preferred day and time slot for the class.
If a teacher is available at the student's preferred day and time slot, send back a success message.
If a teacher is not available for a student’s preferred weekday and time slot, return an error message stating that the requested date and time slot is booked.
Consider each student request to be independent of each other and the teacher availability to be the same for each request.
Sample JSON for student request format and response format can be found here.
Backend Submission
Create an application in your localhost using Django/Express.JS as per your choice and write the API logic for the given task there.
Include a requirements.txt/package.json file containing the list of all used dependencies.
Push the code along with the output file to a public git repository (preferably Github).
Submit the link of that repository in the Google Form provided.


Frontend Task
Design the frontend in React for the API created above. It should include:
A UI Component to display the teacher availability on the frontend
Dropdowns for a user to select weekdays, start time and end time for booking a slot. By default the weekday should be selected to today’s day and start time should be selected to the current hour.
Once a student submits a request to book a class, they should receive a response with either success or error. You are free to design the notification system as you please.
On page refresh, the selection in all the dropdowns should be preserved.
A reset button which selects the default value for all the dropdowns.
Frontend Submission

You can use React - CodeSandbox  https://codesandbox.io/s/new . Make sure you Sign up , rename your project and  save your code. 
	Or
You have to push your code to a public git repo and publish it to a serverless platform (like netlify) to demo it.

Submit the links using the google form provided.



