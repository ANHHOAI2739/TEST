import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({
        message: 'Missing required keys',
      });
    }
    const existingUser = await UserModel.findOne({ username });
    if (!existingUser) {
      return res.status(400).json({
        message: 'Invalid credentials!',
      });
    }
    const existingPass = await UserModel.findOne({ password });

    if (!existingPass) {
      return res.status(400).json({
        message: 'Invalid credentials!',
      });
    }
    //token
    const jwtPayload = {
      id: existingUser.id,
      username: existingUser.username,
      password: existingUser.password,
    };
    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    res.json({
      accessToken: token,
      message: 'Login successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const AuthCtrl = {
  login,
};
export default AuthCtrl;
