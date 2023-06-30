// import React, { useState, useEffect } from 'react';
// import { CChart } from '@coreui/react-chartjs'

// function CodingProfile({ leetcode }) {
//   const [data, setData] = useState(null);
//   const [okSubmissionsCount, setOkSubmissionsCount] = useState(0);
//   const [username, setUsername] = useState(leetcode);

//   useEffect(() => {
//     if (username === '') {
//       return;
//     }
//     // Fetch the data from the API endpoint
//     fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error(error));

//     // Count the number of submissions with verdict "OK"
//     fetch(`https://codeforces.com/api/user.status?handle=${username}&from=1&count=1000000000`)
//       .then(response => response.json())
//       .then(data => {
//         let count = 0;
//         data.result.forEach(submission => {
//           if (submission.verdict === "OK") {
//             count++;
//           }
//         });
//         setOkSubmissionsCount(count)
//       })
//       .catch(error => console.error(error));
//   }, [username]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Trigger the API calls when the user submits the form
//     setUsername(event.target.elements.username.value);
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Enter your username:</label>
//           <input type="text" id="username" name="username" />
//           <button type="submit">Submit</button>
//         </form>
//         {username !== '' && (
//           <>
//             <h3>CodeForces</h3>
//             <p>Submissions with verdict "OK": {okSubmissionsCount}</p>
//             {data && okSubmissionsCount !== null && leetcode ? (
//               <>
//                 <h3>Leetcode</h3>
//                 <p>Total solved: {data.totalSolved}</p>
//                 <p>Easy solved: {data.easySolved} out of {data.totalEasy}</p>
//                 <p>Medium solved: {data.mediumSolved} out of {data.totalMedium}</p>
//                 <p>Hard solved: {data.hardSolved} out of {data.totalHard}</p>
//                 {/* <p>Submissions with verdict "OK": {okSubmissionsCount}</p> */}

//                 <div style={{ width: '200px', height: '200px' }}>
//                   <CChart
//                     type="doughnut"
//                     data={{
//                       labels: ['Easy', 'Medium', 'Hard'],
//                       datasets: [
//                         {
//                           backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
//                           data: [data.easySolved, data.mediumSolved, data.hardSolved],
//                         },
//                       ],
//                     }}
//                   />
//                 </div>
//               </>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default CodingProfile;

import React, { useState, useEffect } from 'react';
import { CChart } from '@coreui/react-chartjs';
import { Box, Divider } from "@mui/material";
import CodeChef from './CodeChef.jsx';

function CodingProfile({ leetcode , total_problems_solved, easy, medium, hard}) {
  const [data, setData] = useState(0);
  const [codechefData, setCodechefData] = useState({});

function setDataCodechef(data) {
  setCodechefData(data);
}
  const [totalSolved, setTotalSolved] = useState(null);
  // total_problems_solved into number and set to datagfg
  const [datagfg, setDatagfg] = useState(Number(total_problems_solved));
  const [okSubmissionsCount, setOkSubmissionsCount] = useState(0);
  const [username, setUsername] = useState(leetcode);
  const [totalProblemsSolved, setTotalProblemsSolved] = useState(0);

  useEffect(() => {
    
    if (username === '') {
      return;

   
    }
    // Fetch the data from the API endpoint
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    // Count the number of submissions with verdict "OK"


    fetch(`https://codeforces.com/api/user.status?handle=${username}&from=1&count=1000000000`)
      .then(response => response.json())
      .then(data => {
        
        let count = 0;
        data.result.forEach(submission => {
          if (submission.verdict === "OK") {
            count++;
          }
        });
        setOkSubmissionsCount(count);
      })
      .catch(error => console.error(error));

  }, [username]);

  return (
    <>
      <div>
        {username !== '' && (
          <>
            {data && okSubmissionsCount !== null && totalProblemsSolved !== null && leetcode ? (
              <>
                <Box p="1rem 0">
                  <div style={{ width: '200px', height: '200px' }}>
                    <CChart
                      type="doughnut"
                      data={{
                        labels: ['Easy', 'Medium', 'Hard'],
                        datasets: [
                          {
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
                            data: [data.easySolved+easy, data.mediumSolved+medium, data.hardSolved+hard],
                          },
                        ],
                      }}
                    />
                  </div>
                </Box>
                <h3>CodeForces</h3>

                <p>Submissions with verdict "OK": {okSubmissionsCount}</p>
                <Divider />
              
       <CodeChef userName={username}  />
       <Divider />
                <h3>GFG</h3>
                <div>
          {/* <p>Rank: {rank}</p> */}
   
      <p>Total Solved: {datagfg}</p>
          {/* <h2>{datagfg.total_problems_solved}</h2> */}
          
              
                  {/* {
                  // Math.floor(Math.random() * (68 - 25 + 1)) + 
                  200} </p> */}
                </div>
                <Divider />

                <h3>Leetcode</h3>
                <p>Total solved: {data.totalSolved}</p>
                {/* 
                <p>Easy solved: {data.easySolved} out of {data.totalEasy}</p>
                <p>Medium solved: {data.mediumSolved} out of {data.totalMedium}</p>
                <p>Hard solved: {data.hardSolved} out of {data.totalHard}</p>
                <p>Submissions with verdict "OK": {okSubmissionsCount}</p> */}

                <Divider />
                <h1>Total solved: {data.totalSolved + okSubmissionsCount 
                +  datagfg
              }</h1>
              
              </>
            ) : (
              <p>Loading...</p>
            )}
          </>

      // <>
      // <h3>Codechef</h3>
      //   <p>Total solved: {data}</p>
      //   {/* <p>Easy solved: {data.easySolved} out of {data.totalEasy}</p>
      //   <p>Medium solved: {data.mediumSolved} out of {data.totalMedium}</p>
      //   <p>Hard solved: {data.hardSolved} out of {data.totalHard}</p>
      //   <p>Submissions with verdict "OK": {okSubmissionsCount}</p>  */}
        
      // </>
      
    
  )}
  </div>
  </>
  );
  
}

export default CodingProfile;
// import React, { useState, useEffect } from 'react';

// function TotalProblemsSolved() {
//   const [gfgProblemsSolved, setgfgProblemsSolved] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://coding-platform-profile-api.onrender.com/geeksforgeeks/varanasisk0011');
//       const data = await response.json();
//       setgfgProblemsSolved(data.total_problems_solved);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {gfgProblemsSolved !== null ? (
//         <p>Total problems solved: {gfgProblemsSolved}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default TotalProblemsSolved;
