import mongoose from "mongoose";

// const userIds = [
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
//   new mongoose.Types.ObjectId(),
// ];


// export const users = [
//   {
//     _id: userIds[0],
//     firstName: "Lakshya",
//     lastName: "Choudhary",
//     email: "lakshya@gmail.com",
//     password: "123456",
//     picturePath: "default.jpg",
//     friends: [],
//     location: "Jodhpur, India",
//     occupation: "Software Engineer",
//     viewedProfile: 1456,
//     impressions: 88822,
//     codeforces:"lakshya_2410",
//      gfg:"useless_programmer",
//     leetcode:"lakshya_2410",
//     createdAt: 1115211422,
//     updatedAt: 1115211422,
//     __v: 0,
//   },
//   {
//     _id: userIds[1],
//     firstName: "Alankrit",
//     lastName: "Anand",
//     email: "thataaa@gmail.com",
//     password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p1.png",
//     friends: [],
//     location: "Patna, India",
//     occupation: "software development and algorithms",
//     viewedProfile: 12351,
//     codeforces:"iLLusio",
//      gfg:"useless_programmer",
//     leetcode:"iLLusio",
//     impressions: 55555,
//     createdAt: 1595589072,
//     updatedAt: 1595589072,
//     __v: 0,
//   },
//   {
//     _id: userIds[2],
//     firstName: "Sonu",
//     lastName: "Kim",
//     email: "someguy@gmail.com",
//     password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
//     picturePath: "default.jpg",
//     friends: [],
//     location: "Busan, South Korea",
//     occupation: "POSTECH",
//     viewedProfile: 45468,
//     codeforces:"kwoncycle",gfg:"useless_programmer",
//     leetcode:"kwoncycle",
//     impressions: 19986,
//     createdAt: 1288090662,
//     updatedAt: 1288090662,
//     __v: 0,
//   },
//   {
//     _id: userIds[3],
//     firstName: "Vikashvar",
//     lastName: "Rajan",
//     email: "whatchadoing@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "default.jpg",
//     friends: [],
//     location: "Coimbatore, Tamil Nadu, India",
//     occupation: "Educator",
//     viewedProfile: 41024,
//     codeforces:"VIKASHVAR_R",
//     leetcode:"VIKASHVAR_R", gfg:"useless_programmer",
//     impressions: 55316,
//     createdAt: 1219214568,
//     updatedAt: 1219214568,
//     __v: 0,
//   },
//   {
//     _id: userIds[4],
//     firstName: "Ankit",
//     lastName: "Doe",
//     email: "janedoe@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "default.jpg",
//     friends: [],
//     location: "Ranchi, India",
//     occupation: "Hacker",
//     viewedProfile: 40212,
//     codeforces:"aktaav02",gfg:"useless_programmer",
//     leetcode:"aktaav02", 
//     impressions: 7758,
//     createdAt: 1493463661,
//     updatedAt: 1493463661,
//     __v: 0,
//   },
//   {
//     _id: userIds[5],
//     firstName: "Harvey", gfg:"useless_programmer",
//     lastName: "Dunn", gfg:"useless_programmer",
//     email: "harveydunn@gmail.com", gfg:"useless_programmer",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy", gfg:"useless_programmer",
//     picturePath: "p0.png", gfg:"useless_programmer",
//     friends: [],
//     location: "Los Angeles, CA", gfg:"useless_programmer",
//     occupation: "Journalist", gfg:"useless_programmer",
//     viewedProfile: 976,
//     codeforces:"Harvey", gfg:"useless_programmer",
//     leetcode:"Harvey",
//     impressions: 4658,
//     createdAt: 1381326073,
//     updatedAt: 1381326073,
//     __v: 0,
//   },
//   {
//     _id: userIds[6],
//     firstName: "Carly",
//     lastName: "Vowel",
//     email: "carlyvowel@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "default.jpg",
//     friends: [],
//     location: "Chicago, IL",
//     occupation: "Nurse",
//     viewedProfile: 1510,
//     codeforces:"Carly", gfg:"useless_programmer",
//     leetcode:"Carly",
//     impressions: 77579,
//     createdAt: 1714704324,
//     updatedAt: 1642716557,
//     __v: 0,
//   },
//   {
//     _id: userIds[7],
//     firstName: "Jessica",
//     lastName: "Dunn",
//     email: "jessicadunn@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "default.jpg",
//     friends: [],
//     location: "Washington, DC",
//     occupation: "A Student",
//     viewedProfile: 19420,
//     codeforces:"Jessica", gfg:"useless_programmer",
//     leetcode:"Jessica",
//     impressions: 82970,
//     createdAt: 1369908044,
//     updatedAt: 1359322268,
//     __v: 0,
//   },
// ];

// export const posts = [
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[1],
//     firstName: "Alankrit",
//     lastName: "Anand",
//     location: "Patna, India",
//     description: `I am working on a React app where i want to display charts. I tried to use react-chartjs-2 but i can't find a way to make it work. when i try to use Pie component, I get the error: Error: "arc" is not a registered element.
//     I did a very simple react app:
//     npx create-react-app my-app
//     npm install --save react-chartjs-2 chart.js`,
//     picturePath: "post_1.png",
//     userPicturePath: "p1.png",
//     likes: new Map([
//       [userIds[0], true],
//       [userIds[2], true],
//       [userIds[3], true],
//       [userIds[4], true],
//     ]),
//     comments: [
//       `v4 of this library, just like Chart.js v3, is tree-shakable. It means that you need to import and register the controllers, elements, scales, and plugins you want to use.
//         For a list of all the available items to import, see Chart.js docs.`,
//       `Do anyone one know how to solve the error i have (without having to keep old versions of chartJs and react-chartjs-2) ?`,
//       `All you have to do is to add this line import 'chart.js/auto';`,
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[3],
//     _id: userIds[3],
//     firstName: "Vikashvar",
//     lastName: "Rajan",
//     location: "Coimbatore, Tamil Nadu, India",
//     description:
//     `How can I set values to the 'useState' from the test file in react (my component don't have props)?`,
//     picturePath: "post_2.jpg",
//     userPicturePath: "default.jpg",
//     likes: new Map([
//       [userIds[7], true],
//       [userIds[4], true],
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),
//     comments: [
//       `o set values to the useState hook in a React component from a test file, 
//       you can use the render method from the testing library to render your component, 
//       and then use the fireEvent method to simulate a user interaction that triggers a state update.`,
//       "The code looks fine, there must be some installing issue.",
//       "(-_-)",
//       `Use render method from testing library to render component,
//        and fireEvent method to simulate user interaction to trigger useState 
//       update in a React component from a test file.`,
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[4],
//     firstName: "Ankit",
//     lastName: "Doe",
//     location: "Ranchi, India",
//     description:
//       "What does this error means?",
//     picturePath: "post_3.jpg",
//     userPicturePath: "default.jpg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//       [userIds[5], true],
//     ]),
//     comments: [
//       "You might be changing directory that does not exits",
//       "wrong directory name",
//       `check whether "npm" exists in your current directory, you can use the following command: ls npm`
//       ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[5],
//     firstName: "Harvey",
//     lastName: "Dunn",
//     location: "Los Angeles, CA",
//     description:
//       "the most confusing topics in CSS in the simplest way possible. ",
//       picturePath: "post_4.png",
//     userPicturePath: "p0.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//     ]),
//     comments: [
//       "Really Healpfull",
//       "Great!!",
//       "Thank You For Sharing this!",
//       "This is really helpfull",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[6],
//     firstName: "Carly",
//     lastName: "Vowel",
//     location: "Chicago, IL",
//     description:
//       "Just a short Overview of Grids in CSS. I hope this Helps.",
//     picturePath: "post_5.jpeg",
//     userPicturePath: "default.jpg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[3], true],
//       [userIds[5], true],
//       [userIds[7], true],
//     ]),
//     comments: [
//       "Really Healpfull",
//       "Great!!",
//       "Thank You For Sharing this!",
//       "This is really helpfull",
//     ],
  
//   },
// ];

