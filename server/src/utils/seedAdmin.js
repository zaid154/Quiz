import User from "../models/User.js";

export async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL || "zaidm1323@gmail.com";
  const password = process.env.ADMIN_PASSWORD || "Zaid@9999201255";

  const existingAdmin = await User.findOne({ email });
  if (existingAdmin) {
    existingAdmin.password = password;
    await existingAdmin.save();
    console.log(`Admin password updated: ${email}`);
    return;
  }

  await User.create({
    name: "Mohd Zaid (Admin)",
    email,
    password,
    role: "admin",
  });

  console.log(`Admin seeded: ${email}`);
}
