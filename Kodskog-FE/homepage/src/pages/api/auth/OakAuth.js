const OakAuthProvider = {
    id: "OakAuth",
    name: "OakAuth",
    type: "credentials",
    credentials: {
      username: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" }
    },
    authorize: async (credentials) => {
      //   const response = await fetch(`${process.env.ACCOUNT_MANAGER_URL}/login`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //       username: credentials.username,
      //       password: credentials.password
      //     })
      //   });

      // const data = await response.json();


      // if (response.ok) {
      if (credentials.username == "hadsag" && credentials.password == "iminyourforest") {
        const user = { 
          id: data.userId || 1, 
          name: credentials.username, 
          // access_token: data.access_token
        };
        return user;
      } else {
        return null;
      }
    }
};

export default OakAuthProvider;
