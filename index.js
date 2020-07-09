//indes.js

/**
 * Required Ext. Modules
 */

 const express = require("express");
 const path = require("path");

 /**
  * App Variables
  */

  const app = express();
  const port = process.env.PORT || "8000";

  /**
   * App Config
   */

   app.set("views", path.join(__dirname, "views"));
   app.set("view engine", "pug")

   /**
    * Routes
    */

    app.get("/", (req, res) => {
        res.render("index", { title: "rogue"});
    })

    /**
     * Server Activation
     */

     app.listen(port,() => {
         console.log('Listening to requests on http://localhost:${port}')
     });