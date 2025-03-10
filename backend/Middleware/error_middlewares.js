const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  if (
    error.name === "SequelizeDatabaseError" &&
    error.parent?.code === "22P02"
  ) {
    statusCode = 400;
    message = "ID invalide fourni";
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "development" ? error.stack : null,
  });
};

export { notFound, errorHandler };
