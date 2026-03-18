import userModel from "../model/userModel.js";
import oauthModel from '../model/oauthModel.js';
import bcrypt from "bcryptjs";

export const userValidation = async function (userName, password) {
    const trimmedUserName = userName.trim();
    const trimmedPassword = password.trim();

    try {
        const user = await userModel.findOne({ userName: trimmedUserName }).exec();

        if (!user) {
            return null;
        }

        if (user.hide) {
            return null;
        }

        const isMatched = await bcrypt.compare(trimmedPassword, user.password);

        if (!isMatched) {
            return null;
        }

        await oauthModel.deleteMany({ 'user.userName': trimmedUserName }).exec();

        return user;

    } catch (err) {
        console.error("Validation error:", err);
        return null; 
    }
};