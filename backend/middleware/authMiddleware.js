import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const protect = asyncHandler(async (req, res, next) => {
    let token;
    // console.log(req.headers.authorization);

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log("DECODED >>>>>>>>>>>", decoded);

            req.user = await User.findById(decoded.id).select("-password");

            // console.log("REQ USER >>>>>>>", req.user);

            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized");
        }
    }

    if (!token) {
        res.status(401);

        throw new Error("No token found");
    }
});

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
};
