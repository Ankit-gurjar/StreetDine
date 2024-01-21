const express = require("express");
const { default: mongoose } = require("mongoose");

const DBconnect = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_URL.replace("<password>", process.env.MONGO_PASS)
    );
    console.log(`MONGODB CONNECTED : ${connect.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = DBconnect;
