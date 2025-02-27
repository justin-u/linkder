import React from 'react'
import AWS from 'aws-sdk'
import { resolve } from 'url';

const authUser = JSON.parse(localStorage.getItem('authUser'));

const condition = authUser != null

var payload = {}
if (condition) {
  payload = {
    'id': authUser.uid,
  }
}
// console.log(payload)
const events = []
const lambda = new AWS.Lambda()

export function data() {
  if (condition)
    return new Promise((resolve, reject) => {
      lambda.invoke({
        FunctionName: 'getFreeTimes-dev',
        Payload: JSON.stringify(payload)
      }, function (err, data) {
        if (err) {
          reject(err);
        }
        else {
          var schedule = JSON.parse(data['Payload'])['freeTimes']
          console.log(schedule);
          var i = 0
          for (var d of schedule) {
            var start = new Date(d.time)
            var end = new Date(start.getTime() + 30 * 60000)
            events.push({
              text: 'Free Time',
              startDate: new Date(d.time),
              endDate: new Date(end)
            })
            i += 1;
          }
          resolve(events);
        }
      })
    });
}


// [
//   {
//     text: 'Website Re-Design Plan',
//     startDate: new Date(2017, 4, 22, 9, 30),
//     endDate: new Date(2017, 4, 22, 11, 30)
//   }, {
//     text: 'Book Flights to San Fran for Sales Trip',
//     startDate: new Date(2017, 4, 22, 12, 0),
//     endDate: new Date(2017, 4, 22, 13, 0),
//     allDay: true
//   }, {
//     text: 'Install New Router in Dev Room',
//     startDate: new Date(2017, 4, 22, 14, 30),
//     endDate: new Date(2017, 4, 22, 15, 30)
//   }, {
//     text: 'Approve Personal Computer Upgrade Plan',
//     startDate: new Date(2017, 4, 23, 10, 0),
//     endDate: new Date(2017, 4, 23, 11, 0)
//   }, {
//     text: 'Final Budget Review',
//     startDate: new Date(2017, 4, 23, 12, 0),
//     endDate: new Date(2017, 4, 23, 13, 35)
//   }, {
//     text: 'New Brochures',
//     startDate: new Date(2017, 4, 23, 14, 30),
//     endDate: new Date(2017, 4, 23, 15, 45)
//   }, {
//     text: 'Install New Database',
//     startDate: new Date(2017, 4, 24, 9, 45),
//     endDate: new Date(2017, 4, 24, 11, 15)
//   }, {
//     text: 'Approve New Online Marketing Strategy',
//     startDate: new Date(2017, 4, 24, 12, 0),
//     endDate: new Date(2017, 4, 24, 14, 0)
//   }, {
//     text: 'Upgrade Personal Computers',
//     startDate: new Date(2017, 4, 24, 15, 15),
//     endDate: new Date(2017, 4, 24, 16, 30)
//   }, {
//     text: 'Customer Workshop',
//     startDate: new Date(2017, 4, 25, 11, 0),
//     endDate: new Date(2017, 4, 25, 12, 0),
//     allDay: true
//   }, {
//     text: 'Prepare 2015 Marketing Plan',
//     startDate: new Date(2017, 4, 25, 11, 0),
//     endDate: new Date(2017, 4, 25, 13, 30)
//   }, {
//     text: 'Brochure Design Review',
//     startDate: new Date(2017, 4, 25, 14, 0),
//     endDate: new Date(2017, 4, 25, 15, 30)
//   }, {
//     text: 'Create Icons for Website',
//     startDate: new Date(2017, 4, 26, 10, 0),
//     endDate: new Date(2017, 4, 26, 11, 30)
//   }, {
//     text: 'Upgrade Server Hardware',
//     startDate: new Date(2017, 4, 26, 14, 30),
//     endDate: new Date(2017, 4, 26, 16, 0)
//   }, {
//     text: 'Submit New Website Design',
//     startDate: new Date(2017, 4, 26, 16, 30),
//     endDate: new Date(2017, 4, 26, 18, 0)
//   }, {
//     text: 'Launch New Website',
//     startDate: new Date(2017, 4, 26, 12, 20),
//     endDate: new Date(2017, 4, 26, 14, 0)
//   }
// ];

