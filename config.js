const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212714200975";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_27_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKcTRZVDZEMmZiNGFFNWVwVXlteWZLUFl3bjdSR09kOENoMTNSdVhPZ3pNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjcxNDIwMDk3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkEzNDgzOUVCODIyQkNBOEIyREY2RTA1NzU0MDJBODJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NzI0NDYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzE0MjAwOTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MjA1QzQ1MkIwQTI1MDRDRTdFQTYwNDc2MTNCQ0Y5RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg3MjQ0NjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3MTQyMDA5NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUyOTdFQUIzMTI1RDQyNjUzOERDNERBODgyN0RCRjBGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODcyNDQ2M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHNzRLdkxEdVI3U3ZVbHZNU2RFU2ZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNmOTUwNTlhLWI1ZmQtNDNlYS1iZmIyLTc4ZGNiYmVjNTIzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNTYsXG4gICAgICAxNTMsXG4gICAgICAxNjAsXG4gICAgICAzNixcbiAgICAgIDEzNixcbiAgICAgIDE0MSxcbiAgICAgIDQ5LFxuICAgICAgMTU4LFxuICAgICAgMjQ0LFxuICAgICAgMTEsXG4gICAgICAxNzksXG4gICAgICA1NCxcbiAgICAgIDE1NCxcbiAgICAgIDE5NCxcbiAgICAgIDQ2LFxuICAgICAgNjgsXG4gICAgICAxNTcsXG4gICAgICAyNDAsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAxMTMsXG4gICAgICAxNjcsXG4gICAgICAxODgsXG4gICAgICAxMzQsXG4gICAgICAyMzIsXG4gICAgICAyNTUsXG4gICAgICA1NixcbiAgICAgIDE2NCxcbiAgICAgIDE5LFxuICAgICAgMjM5LFxuICAgICAgMTg0LFxuICAgICAgMTk2LFxuICAgICAgMTAyLFxuICAgICAgMjM2LFxuICAgICAgMTU3LFxuICAgICAgNTYsXG4gICAgICAxOCxcbiAgICAgIDE4MixcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHUFlMNzNQNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNzE0MjAwOTc1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTMzNDgzMDYxNTM1NDY6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqcCtlNEVFT2ZPeHJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib1RBbHQ3Y29LTTJ4STdBMWg4eXd6dmlJNFZSNGhrT3RQeXUvTElqUFBDdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxdWZ6QWN0NnFzQ1VDUFRWVmREaFFENXhvRU02RE5LQXpBSVFOTExaaFpWY1B2M3ZmdWJrcngxRHd6dGg2OWh1THk4UCs5YzNhbkdZc21ibnIzTHJEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrQ2QvSUNMdVFGYTFoWVp0cGNHOXRWdEZtNVB6L3c2by9JWmpYNXZmcmxhVFk4NkNsR2RNVHFnUk15dFNYOUJnTTlwSEVxRTIzaEgxc2Erd2NMc3VDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI3MTQyMDA5NzU6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcyNDQ2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpydVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnJ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNXhJaUZqaWdvUTY5SGYzMGJwb3hRUVJBdXlQOUxvQXpyekFoY1UrY2Vmbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzA2NDI0NTAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg3MjQzMjAzMzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
