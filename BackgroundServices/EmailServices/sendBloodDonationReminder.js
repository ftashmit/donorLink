const ejs=require("ejs");
const dotenv=require("dotenv");
const Donor=require("../models/Donors");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const formatDate =(date)=>{
    const year=date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2,'0');
    return `${year}/${month}/${day}`;
};


const sendBloodDonationReminder =async()=>{
    const donors= await Donor.find();
    if(donors.length>0){

        for (let donor of donors) {
            //this loop is to calculate the difference in dates of the previous donation and present date
            const donorDate=new Date(donor.date);
            const today = new Date();
            const diffTime=math.abs(today-donorDate);
            const diffDays=math.cell(diffTime/(1000*60*60*24))

            if(diffDays>75){
                ejs.renderFile(
                    "templates/bloodDonationReminder.ejs",
                    {
                        name:donor.name, 
                        date: donor.date
                    },

                    async (err,data) =>{
                        let messageoption={
                            from:process.env.EMAIL,
                            to: donor.email,
                            subject:"Hello, DonorLink Donor!",
                            html:data
                        };
                    try {
                        await sendMail(messageoption);
                        const formattedDate=formatDate(today);
                        await Donor.findByIdAndUpdate(donor._id,
                            {
                                $set:{date:formattedDate}
                            }
                        )
                    }
                     catch (error) {
                        console.log(error)
                    } 
                }   
                );
            }
        }
    }


}


module.exports={sendBloodDonationReminder};