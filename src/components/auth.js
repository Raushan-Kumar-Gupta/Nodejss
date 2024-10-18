const authr = (req, res, next) => {
  const token = "xyz";
  const authorization = token === "xyz";

  if (!authorization) {
    res.status(404).send("authorization is required");
  } else {
    next();
  }
};

module.exports = { authr };
