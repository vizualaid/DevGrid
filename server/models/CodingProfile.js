import mongoose from "mongoose";
// const mongoose = require('mongoose');

const codingProfileSchema = mongoose.Schema({
    
    username: String,
    collage_rank: String,
    institute_name: String,
    language_used: String,
    overall_coding_score: String,
    total_problems_solved: String,
    monthly_score: String,
    school_problems_solved: Number,
    basic_problems_solved: Number,
    easy_problems_solved: Number,
    medium_problems_solved: Number,
    hard_problems_solved: Number,
    userId: {
      type: String,
      required: true,
    },
  });


const CodingProfile = mongoose.model("CodingProfile", codingProfileSchema);

export default CodingProfile;
