const express=require("express");
const app = express();
const dotenv =require("dotenv");
const cron = require('node-cron');
const dbConnection = require("./utils/db");
const { sendDetailsProspectEmail } = require("./EmailServices/sendDetailsProspect");
const { sendEligibilityEmail } = require("./EmailServices/sendEligibilityEmail");
const { sendBloodDonationReminder } = require("./EmailServices/sendBloodDonationReminder");
const { sendDonorDetailsEmail } = require("./EmailServices/sendDonorDetailsEmail");
dotenv.config();

// SERVER
const PORT= process.env.PORT;

//SCHEDULE TASKS
const run=()=>{
    cron.schedule('* * * * * ', () => {
        // console.log('running a task every minute');
        sendDetailsProspectEmail();
        sendEligibilityEmail();
        sendBloodDonationReminder();
        sendDonorDetailsEmail();
      }); 
}




app.listen(PORT, ()=>{
    console.log(`Backgroundservices is running on ${PORT}`);
    dbConnection();
});

