import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      codeforces,
      leetcode,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      codeforces,
      leetcode,
      viewedProfile: Math.floor(Math.random() * 100),
      impressions: Math.floor(Math.random() * 100),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
// import CodingProfile from "../models/CodingProfile.js";

// /* REGISTER USER */
// export const register = async (req, res) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       password,
//       picturePath,
//       friends,
//       location,
//       occupation,
//       codeforces,
//       leetcode,
//     } = req.body;

//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password: passwordHash,
//       picturePath,
//       friends,
//       location,
//       occupation,
//       codeforces,
//       leetcode,
//       viewedProfile: Math.floor(Math.random() * 100),
//       impressions: Math.floor(Math.random() * 100),
//     });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// /* CP PROFILE*/
// export const createCodingProfile = async (req, res) => {
//   try {
//     const {
//       userId,
//       username,
//       bio,
//       skills,
//       github,
//       website,
//       linkedin,
//       twitter,
//     } = req.body;

//     const newCodingProfile = new CodingProfile({
//       user: userId,
//       username,
//       bio,
//       skills,
//       github,
//       website,
//       linkedin,
//       twitter,
//     });

//     const savedCodingProfile = await newCodingProfile.save();

//     res.status(201).json(savedCodingProfile);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const updateCodingProfile = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
       
//     // username,
//     collage_rank,
//     institute_name,
//     language_used,
//     overall_coding_score,
//     total_problems_solved,
//     monthly_score,
//     school_problems_solved,
//     basic_problems_solved,
//     easy_problems_solved,
//     medium_problems_solved,
//     hard_problems_solved,
//     userId,
//     } = req.body;

//     const updatedCodingProfile = await CodingProfile.findByIdAndUpdate(
//       id,
//       {
          
//     // username,
//     collage_rank,
//     institute_name,
//     language_used,
//     overall_coding_score,
//     total_problems_solved,
//     monthly_score,
//     school_problems_solved,
//     basic_problems_solved,
//     easy_problems_solved,
//     medium_problems_solved,
//     hard_problems_solved,
//     userId,
//       },
//       { new: true }
//     );

//     res.status(200).json(updatedCodingProfile);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// /* LOGGING IN */
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email: email });
//     if (!user) return res.status(400).json({ msg: "User does not exist. " });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     delete user.password;
//     res.status(200).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

