const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main()
    .then(()=>{
    console.log("connection successful")
})
    .catch(err=> console.log(err));
    
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
      {
    from: "Professor",
    to: "Student",
    msg: "Have you completed your assignment on data structures?",
    created_at: new Date(),
  },
  {
    from: "DevOps",
    to: "DevTeam",
    msg: "Let's deploy the new feature using CI/CD pipeline.",
    created_at: new Date(),
  },
  {
    from: "CyberSecurity",
    to: "NetworkAdmin",
    msg: "Remember to update the firewall rules to prevent SQL injection attacks.",
    created_at: new Date(),
  },
  {
    from: "AI/ML",
    to: "DataScientist",
    msg: "Let's train the model using TensorFlow and Keras.",
    created_at: new Date(),
  },
  {
    from: "WebDev",
    to: "FrontendTeam",
    msg: "Use React.js to build the user interface for our new web application.",
    created_at: new Date(),
  },
];
Chat.insertMany(allChats);

