import User from "../models/User.js";

export async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL || "zaidquiz@gmail.com";
  const password = process.env.ADMIN_PASSWORD || "Zaid@123456";

  const existingAdmin = await User.findOne({ email });
  if (existingAdmin) {
    return;
  }

  await User.create({
    name: "Zaid Admin",
    email,
    password,
    role: "admin",
  });

  console.log(`Admin seeded: ${email}`);
}
