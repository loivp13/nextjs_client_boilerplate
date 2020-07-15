module.exports = (env) => {
  let publicRunTimeConfig = {
    APP_NAME: "NODE-REACT-AWS",
    API: "http://localhost:8000/api",
    PRODUCTION: false,
    DOMAIN: "http://localhost:3000",
    FB_APP_ID: "ddjksafjadf",
  };

  if (env !== "public") {
    return { ...publicRunTimeConfig };
  } else return publicRunTimeConfig;
};
