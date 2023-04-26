import React from 'react';
import { Box} from "@mui/material";

function CodingProfile({ username, theme }) {
  return (
    <div>
        
    <a href={`https://github.com/${username}`}>
      <img align="center" src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&count_private=true&layout=compact`} />
    </a>
    <Box m="2rem 0" />
    <Box m="2rem 0" />
    <a href={`https://git.io/streak-stats/?user=${username}`}>
      <img align="center" src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=${theme}&count_private=true`} />
    </a>
  </div>
  );
}

export default CodingProfile;