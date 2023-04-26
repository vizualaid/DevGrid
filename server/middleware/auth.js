import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// This middleware function called verifyToken is responsible for verifying the authenticity of a user's JSON Web Token 
// before allowing them access to certain protected routes in your social media project.

// When a request is made to one of these protected routes, 
// this middleware extracts the JWT from the header of the incoming request, 
// and then verifies it using the JWT_SECRET stored in your environment variables.
//  If the token is verified successfully, the middleware sets the req.user property with the decoded payload of the JWT, and passes control to the next middleware function.

// If the token is invalid or not present, the middleware returns an error response with status 403.
//  In case of any other errors during verification, the middleware returns a general server error with status 500.
