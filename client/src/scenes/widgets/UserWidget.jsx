// import {
//   ManageAccountsOutlined,
//   EditOutlined,
//   AccountBalanceOutlined,
//   LocationOnOutlined,
//   WorkOutlineOutlined,
// } from "@mui/icons-material";
// import { Box, Typography, Divider, useTheme } from "@mui/material";
// import UserImage from "components/UserImage";
// import FlexBetween from "components/FlexBetween";
// import WidgetWrapper from "components/WidgetWrapper";
// import CodingProfile from "components/CodingProfile";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CodeChef from "components/CodeChef";
// const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Types;

// const UserWidget = ({ userId, picturePath }) => {
//   const [user, setUser] = useState(null);
//   const [cp, setCP] = useState(null);
//   const { palette } = useTheme();
//   const navigate = useNavigate();
//   const token = useSelector((state) => state.token);
//   const dark = palette.neutral.dark;
//   const medium = palette.neutral.medium;
//   const main = palette.neutral.main;
//   // var userId2

//   const getUser = async () => {
//     const response = await fetch(`http://localhost:3001/users/${userId}`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const data = await response.json();
//     setUser(data);
//   };
//   const getCodingProfile = async () => {
//     const response = await fetch(`http://localhost:3001/codingprofiles/${userId}`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const data = await response.json();
//     setCP(data);
//   };
  
//   useEffect(() => {
//     getUser();
   
//     getCodingProfile();
  
//   }, []); 
  
//   if (!user) {
//     return null;
//   }
//   if (!cp) {
//     return null;
//   }
  
//   const {
//     firstName,
//     lastName,
//     location,
//     occupation,
//     viewedProfile,
//     leetcode,
//     codeforces,
//     gfg,
//     impressions,
//     friends,
//   } = user;
  
//   const {
//     collage_rank,
//     institute_name,
//     language_used,
//     overall_coding_score,
//     total_problems_solved,
//     school_problems_solved,
//     basic_problems_solved=0,
//     easy_problems_solved=0,
//     medium_problems_solved=0,
//     hard_problems_solved=0,
//   } = cp;

//   function trimWords(str, maxWords) {
//     const words = str.split(' ');
//     if (words.length > maxWords) {
//       return `${words.slice(0, maxWords).join(' ')} ...`;
//     } else {
//       return str;
//     }
//   }
  
  

  
//   return (
//     <WidgetWrapper>
//       {/* FIRST ROW */}
//       <FlexBetween
//         gap="0.5rem"
//         pb="1.1rem"
//         onClick={() => navigate(`/profile/${userId}`)}
//       >
//         <FlexBetween gap="1rem">
//           <UserImage image={picturePath} />
//           <Box>
//             <Typography
//               variant="h4"
//               color={dark}
//               fontWeight="500"
//               sx={{
//                 "&:hover": {
//                   color: palette.primary.main,
//                   // color:palette.secondary.light,
//                   cursor: "pointer",
//                 },
//               }}
//             >
//               {firstName} {lastName}
//             </Typography>
//             <Typography color={medium}>{friends.length} friends </Typography>
            
          

//           </Box>
//         </FlexBetween>
//         <ManageAccountsOutlined />
//       </FlexBetween>

//       <Divider />

//       {/* SECOND ROW */}
//       <Box p="1rem 0">
//         <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
//           <AccountBalanceOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>Tech Institute of India</Typography>
//           {/* <Typography color={medium}>{trimWords(institute_name, 4)}</Typography> */}
//         </Box> <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
//           <LocationOnOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>{location}</Typography>
//           {/* <Typography color={medium}>{trimWords(institute_name, 4)}</Typography> */}
//         </Box>
        
//         <Box display="flex" alignItems="center" gap="1rem">
//           <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
//           <Typography color={medium}>{occupation}</Typography>
//         </Box>
//       </Box>

//       <Divider />

//       {/* THIRD ROW */}
//       <Box p="1rem 0">
//         <FlexBetween mb="0.5rem">
//           <Typography color={medium}>Profile Views</Typography>
//           <Typography color={main} fontWeight="500">
//             {viewedProfile}
//           </Typography>
//         </FlexBetween>
//         <FlexBetween>
//           <Typography color={medium}>Post Impressions</Typography>
//           <Typography color={main} fontWeight="500">
//             {impressions}
//           </Typography>
//         </FlexBetween>
//       </Box>
//       <Divider />
//       <Box p="1rem 0">
//         <FlexBetween mb="0.5rem">
//           <Typography color={medium}>Coding Profile</Typography>
//           <Typography color={main} fontWeight="500">
//           <Typography color={medium}>Leetcode :</Typography> {leetcode} </Typography>
//           {/* <Typography color={main} fontWeight="500"> <Typography color={medium}>Codeforces :</Typography> {leetcode} </Typography> */}
//         </FlexBetween>
//         <FlexBetween>
//           {/* code component coding profile here */}
         
//          {/* //after gfg */}
//        {/* <CodingProfile 
//     leetcode={leetcode}
//     total_problems_solved={total_problems_solved}
//     easy= {basic_problems_solved}//32
//     medium ={easy_problems_solved+medium_problems_solved}//80
//     hard= {hard_problems_solved}//16
//     />   */}
//     <CodingProfile 
//     leetcode={leetcode}
//     Codeforces={codeforces}
//     total_problems_solved={100}
//     easy= {32}//32
//     medium ={34}//80
//     hard= {16}//16
//     />  
    
//         </FlexBetween>
//       </Box>

//       <Divider />

//       {/* FOURTH ROW */}
      
//       <Box p="1rem 0">
//         <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
//           Social Profiles
//         </Typography>

//         <FlexBetween gap="1rem" mb="0.5rem">
//           <FlexBetween gap="1rem">
//             {/* <img src="../assets/twitter.png" alt="twitter" /> */}
//             <Box>
//               <Typography color={main} fontWeight="500">
//                 Twitter
//               </Typography>
//               <Typography color={medium}>Social Network</Typography>
//             </Box>
//           </FlexBetween>
//           <EditOutlined sx={{ color: main }} />
//         </FlexBetween>

//         <FlexBetween gap="1rem">
//           <FlexBetween gap="1rem">
//             {/* <img src="../assets/linkedin.png" alt="linkedin" /> */}
//             <Box>
//               <Typography color={main} fontWeight="500">
//                 Linkedin
//               </Typography>
//               <Typography color={medium}>Network Platform</Typography>
//             </Box>
//           </FlexBetween>
//           <EditOutlined sx={{ color: main }} />
//         </FlexBetween>
//       </Box>
//     </WidgetWrapper>
//   );
// };

// export default UserWidget;

import {
  ManageAccountsOutlined,
  EditOutlined,
  AccountBalanceOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import CodingProfile from "components/CodingProfile";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CodeChef from "components/CodeChef";
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const [cp, setCP] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  var userId2
  const [datagfg, setDatagfg] = useState(null);
  // const [usernamegfg, setUsernamegfg] = useState(userName);


  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };
  const getCodingProfile = async () => {
    const response = await fetch(`http://localhost:3001/codingprofiles/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setCP(data);
  };
  
  useEffect(() => {
    getUser();
    getCodingProfile();
  }, []); 

  useEffect(() => {
    if (user && user.gfg !== '') {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/geeksforgeeks/${user.gfg}`);
          const datagfg = await response.json();
          setDatagfg(datagfg);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [user]);

  if (!user || !cp) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    leetcode,
    codeforces,
    gfg,
    impressions,
    friends,
  } = user;
  
  const {
    collage_rank = datagfg?.collage_rank,
    institute_name = datagfg?.institute_name,
    language_used = datagfg?.language_used,
    overall_coding_score = datagfg?.overall_coding_score,
    total_problems_solved = datagfg?.total_problems_solved,
    school_problems_solved = datagfg?.school_problems_solved,
    basic_problems_solved = datagfg?.basic_problems_solved,
    easy_problems_solved = datagfg?.easy_problems_solved,
    medium_problems_solved = datagfg?.medium_problems_solved,
    hard_problems_solved = datagfg?.hard_problems_solved,
  } = cp;

  function trimWords(str, maxWords) {
    const words = str.split(' ');
    if (words.length > maxWords) {
      return `${words.slice(0, maxWords).join(' ')} ...`;
    } else {
      return str;
    }
  }
  
  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.main,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        {/* <ManageAccountsOutlined /> */}
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <AccountBalanceOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{trimWords(institute_name, 4)}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Profile Views</Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Post Impressions</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>
      <Divider />
      <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Coding Profile</Typography>
          <Typography color={main} fontWeight="500">
            <Typography color={medium}>Leetcode:</Typography> {leetcode}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <CodingProfile
            leetcode={leetcode}
            Codeforces={codeforces}
            total_problems_solved={total_problems_solved}
            easy={basic_problems_solved} //32
            medium={easy_problems_solved + medium_problems_solved} //80
            hard={hard_problems_solved} //16
          />
        </FlexBetween>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
