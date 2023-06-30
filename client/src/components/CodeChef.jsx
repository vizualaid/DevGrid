import React, { useEffect, useState } from 'react';

const CodeChef = ({userName}) => {
  const [dataCodechef, setDataCodechef] = useState(null);
  const [username, setUsername] = useState(userName);
  useEffect(() => {
    console.log("useffect start");
    if (username === '') {
        
        return;
  
     
      }    
    const fetchData = async () => {
      try {
        console.log("useffect try");
        const response = await fetch(`http://localhost:3001/codechef/${username}`);

        const data = await response.json();
        setDataCodechef(data);
        console.log("heyyy");
        console.log(data);
      } catch (error) {
                console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>CodeChef</h3>
      {/* Render your component content */}
      {dataCodechef && <p>Problems Solved: {dataCodechef.problems_solved}</p>}
    </div>
  );
};
export default CodeChef;

