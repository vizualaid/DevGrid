import mongoose from 'mongoose';

const CodeChefSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  college_rank: {
    type: String,
    required: true,
  },
  institute_name: {
    type: String,
    required: true,
  },
  language_used: {
    type: String,
    required: true,
  },
  overall_coding_score: {
    type: String,
    required: true,
  },
  total_problems_solved: {
    type: String,
    required: true,
  },
  monthly_score: {
    type: String,
    required: true,
  },
  school_problems_solved: {
    type: Number,
    required: true,
  },
  basic_problems_solved: {
    type: Number,
    required: true,
  },
  easy_problems_solved: {
    type: Number,
    required: true,
  },
  medium_problems_solved: {
    type: Number,
    required: true,
  },
  hard_problems_solved: {
    type: Number,
    required: true,
  },
});

const CodeChef = mongoose.model('CodeChef', CodeChefSchema);

export default CodeChef;
