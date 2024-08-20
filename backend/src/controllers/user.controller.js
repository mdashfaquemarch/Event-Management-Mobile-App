import { User } from '../models/index.js'
// register

const signup = async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res
  const {
    fullName,
    email,
    password,
    collegeName,
    branch,
    semester,
    section,
    enrollment,
  } = req.body;

  if (
    [
      fullName,
      email,
      password,
      collegeName,
      branch,
      semester,
      section,
      enrollment,
    ].some((ele) => ele?.trim() === "")
  ) {
    return res.status(400).json("All Fields are required!");
  }

  const existedUser = await User.findOne({
    $or: [{ enrollment }, { email }],
  });

  if (existedUser) {
    return res.status(409).json("user with this email already exists");
  }

  const user = await User.create({
    fullName,
    email,
    password,
    collegeName: collegeName.toLowerCase(),
    branch: branch.toLowerCase(),
    semester,
    section,
    enrollment: enrollment.toUpeerCase()
  });

  const createdUser = await User.findById(user._id).select(
    "-password"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json({
        ...createdUser,
        message:"User registered Successfully"
    });
};

// login

const login = async () => {
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const { email, password } = req.body
    console.log(email);

    if (!email && !password) {
        throw new ApiError(400, "email or password is required");
    }
    

    const user = await User.findOne({email});

    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

   const isPasswordValid = await user.isPasswordCorrect(password);

   if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
};

// logout

const logout = async (req,res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
};

export { signup, login, logout };
