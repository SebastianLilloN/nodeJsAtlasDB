const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb://Sentiliforme:123@cluster0-shard-00-00.8q9f2.mongodb.net:27017,cluster0-shard-00-01.8q9f2.mongodb.net:27017,cluster0-shard-00-02.8q9f2.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-6zadv4-shard-0&authSource=admin&retryWrites=true&w=majority",
  port: process.env.PORT || 3000,
  host: process.env.HOST || "http://localhost",
};
module.exports = config;
