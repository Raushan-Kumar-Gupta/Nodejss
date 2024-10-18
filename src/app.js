const express = require("express");

const app = express();

const { authr } = require("./components/auth.js");
app.use(
    "/admin",
    authr
  );

  

app.use(
    "/admin/userDetails",
    (req, res, next) => {
        // const token="xyza";
        // const authorization=token==='xyz'

        // if(authorization){
            res.send("user details")
        // }
        // else{
        //     res.status(404).send("authorization is required")
        // }

    }
  );

  app.use(
    "/admin/userInfo",
    (req, res, next) => {
        // const token="xyza";
        // const authorization=token==='xyz'

        // if(authorization){
            res.send("user info")
        // }
        // else{
        //     res.status(404).send("authorization is required")
        // }

    }
  );
// app.use(
//   "/",
//   (req, res, next) => {
//     // res.send("working 1...")
//     next();
//   }
// );
// app.use(
//     "/",
//     (req, res, next) => {
//       // res.send("working 1...")
//       next();
//     }
//   );
//   app.use(
//     "/",
//     (req, res, next) => {
//       // res.send("working 1...")
//       next();
//     }
//   );
//   app.use(
//     "/",
//     (req, res, next) => {
//       res.send("working 4...")
      
//     }
//   );
app.listen(3000);
