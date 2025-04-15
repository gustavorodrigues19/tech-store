import { User } from "../../models/index.js";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .strict();

const userRoutes = [
  {
    method: "post",
    path: "/sign-up",
    handler: async (req, res) => {
      try {
        const result = userSchema.safeParse(req.body);

        if (!result.success) {
          return res
            .status(400)
            .json({ message: "Bad user input", issues: result.error.issues });
        }

        const user = await User.findOne({ email: result.data.email });
        if (user) {
          return res.status(400).json({ message: "User already exists" });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(result.data.password, salt);

        const newUser = await User.create({
          email: result.data.email,
          password: hashedPassword,
        });

        const token = jwt.sign(
          { email: newUser.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        return res.status(200).json(token);
      } catch {
        return res.status(500).json({ message: "Internal error" });
      }
    },
  },
];

export default userRoutes;
