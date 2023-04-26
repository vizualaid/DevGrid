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

function CodingProfile({ leetcode }) {
  const [data, setData] = useState(null);
  const [rank, setRank] = useState(null);
  const [instituteName, setInstituteName] = useState(null);
  const [totalSolved, setTotalSolved] = useState(null);
  const [datagfg, setDatagfg] = useState(null);
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


      fetch(`http://localhost:3000/kunwarisha9`)
      .then(response => response.json())
      .then(data => {
        setRank(data.collage_rank);
        setInstituteName(data.institute_name);
        setTotalSolved(data.total_problems_solved);
               
        const totalSolved = parseInt(data.total_problems_solved);

        setTotalProblemsSolved(totalSolved);
        console.warn(totalSolved);
      })
    // const fetchData = async () => {
    //   const response = await fetch(`https://coding-platform-profile-api.onrender.com/geeksforgeeks/kunwarisha9`);
    //   const jsonData = await response.json();
    //   setDatagfg(jsonData);
    //   // console.log("HIIIIIIIIIIII");
    //   console.log(jsonData);
    // };

    // fetchData();

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
                            data: [data.easySolved, data.mediumSolved, data.hardSolved],
                          },
                        ],
                      }}
                    />
                  </div>
                </Box>
                <h3>CodeForces</h3>

                <p>Submissions with verdict "OK": {okSubmissionsCount}</p>
                <Divider />
                <h3>GFG</h3>
                <div>
          <p>Rank: {rank}</p>
      <p>Institute Name: {instituteName}</p>
      <p>Total Problems Solved: {totalSolved}</p>
          {/* <h2>{datagfg.total_problems_solved}</h2> */}
          
                  <p>Problems Solved:
                    {totalProblemsSolved}</p>
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
                <h1>Total solved: {data.totalSolved + okSubmissionsCount + 200}</h1>
                {/* datagfg.total_problems_solved */}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </>
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
