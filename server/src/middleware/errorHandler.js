export function errorHandler(error, _req, res, _next) {
  console.error(error);

  if (error.code === 11000) {
    return res.status(409).json({ message: "Duplicate record found" });
  }

  res.status(error.status || 500).json({
    message: error.message || "Something went wrong",
  });
}
