const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_07_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk1LFxuICAgICAgICA5MixcbiAgICAgICAgMjI2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDc0LFxuICAgICAgICAzNSxcbiAgICAgICAgNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU2LFxuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWVCSEJrVXRvWGwwSUdQdWV5d216Y3EveHlxcTZmZHFaRVFZaVlIdGNUaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVpMOFBvNktUa3VTLWhJYzlGYnpuUVwiLFxuICBcInBob25lSWRcIjogXCJiN2VmYzgxMS1hN2JkLTQ0M2YtYmZjYS0xMDQ4YmRkZTgxMzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgODksXG4gICAgICAyMzEsXG4gICAgICA0NixcbiAgICAgIDIyOCxcbiAgICAgIDgxLFxuICAgICAgMzMsXG4gICAgICA0MixcbiAgICAgIDEwMyxcbiAgICAgIDIxMixcbiAgICAgIDIzMyxcbiAgICAgIDMyLFxuICAgICAgMjIzLFxuICAgICAgMTAzLFxuICAgICAgMjA4LFxuICAgICAgMjU1LFxuICAgICAgMTY4LFxuICAgICAgMTQyLFxuICAgICAgOTgsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICA0LFxuICAgICAgNTEsXG4gICAgICAxMjAsXG4gICAgICAxOSxcbiAgICAgIDExMSxcbiAgICAgIDEyMyxcbiAgICAgIDkxLFxuICAgICAgNTQsXG4gICAgICAzMCxcbiAgICAgIDYyLFxuICAgICAgMTYwLFxuICAgICAgMTUyLFxuICAgICAgMjUzLFxuICAgICAgMTcyLFxuICAgICAgMTMsXG4gICAgICA3NSxcbiAgICAgIDE5MSxcbiAgICAgIDgxLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRKQVFIR1E5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3Nzk0Mzg0ODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiW/Cdk6LwnZOf8J2TlPCdk5LwnZOY8J2TkPCdk5sgIPCdk5rwnZOY8J2TnfCdk5ZdXFxuXFxu8J2Xn1xcblxcbvCdl5hcXG5cXG7wnZeXXFxuXFxuXFxu8J2XlFxcblxcbvCdl59cXG5cXG7wnZeYXFxuXFxu8J2Xq1xcblxcblxcbvCdl6VcXG5cXG7wnZeUXFxuXFxu8J2XoVxcblxcbvCdl5dcXG5cXG7wnZesXFxuXFxuW/Cdk6LwnZOf8J2TlPCdk5LwnZOY8J2TkPCdk5sg8J2TlfCdk5DwnZOc8J2TmPCdk5vwnZOoXVwiLFxuICAgIFwibGlkXCI6IFwiMTU2MTk1Mjc2OTgwNDQ2OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZLL2UwSEVQcWducnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSV0d4MUhJUVd6d2s4bkdOdWlKcW53VUFZNHhVaUdLVXdzMmZRZkI1cUdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllUOWk3WitjdUxiYjRVczUvbWxMSDh0elpxTGJBN2RCM05OOUFHdjl2TzBNSTREQzYycGt2Zyt1RjNhaUhERXpwN05YYXZjdThOSy8rUGtKbUxwc0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjMrck9uNWU0STZ6cytOM3duSDk5MXNWSmJLOEJId3RaZkpJRXR0N2RnYk9lSzI3aW84ZElJR3FrT3FjYmJBbU1DY2t4a3NVNkdDczhCcjIrdW43TUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc3OTQzODQ4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ4NDA0NDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
