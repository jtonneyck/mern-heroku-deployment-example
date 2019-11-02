# Deployment with React

* **Step 1**: Create your Heroku app using heroku create.
* **Step 2**: Create a free database cluster on MongoDB atlas. Make sure you allow access from anywhere (Security => Network access). If you want to migrate your data from local to production, connect to your local DB, export all of your collections in compass, connect to your Atlas cluser and import them.
* **Step 3**: Set your environment variables on the client and server. On the client, use .env.development for the values you want to use in development, for example `localhost:3000` and use .env.production for the values you want to use for your deployed version, for example `your-app.heroku-app.com`. The scripts automatically choose the right files. Pay special attention to how your api-url ends, wether with or without a trailing forward slash `/`. Your backend .env file only holds the values you need locally. You set the values you need for deployment on the heroku dashboard. That's why we only have one .env file on the backend.
* **Step 4**: Build your react app with npm run build.
* **Step 5**: Copy your build to your static directory on the server. If you forgot what a static dir is, the documentation is your friend: https://expressjs.com/en/starter/static-files.html .
* **Step 6**: Create your start script and install script for Heroku. Check the `package.json` file in the root directory of this repository.
* **Step 7**: Set your backend env vars on Heroku
* **Step 8**: Push you production ready code to Heroku.
**Step 9**: Enjoy... Well, probably not really. It rarely works the first time. You have to figure out what went wrong and wether or not that's because of the deployment or if it's a normal bug. Normal bugs should be first fixed locally. Common deployment bugs are
    * A. Double backslashes in your api endpoints, for example your-herokuapp-.com//login. Solution: fix your env file and build again. Copy your build - again- and push the changes to Heroku.
    * B. Forgetting to allow access from anywhere on MongoDB Atlas or using the wrong connection string. Solution: configure you DB as described in step 2 and make sure you are not pointing to the test DB, but to the DB you created yourself. Also, don't use a connection string with SRV in it (choose another version listed on Atlas). Update your backend env vars on Heroku and restart your app from heroku. You don't have to rebuild.

If you want to make changes to your React source code and you want to deploy them, you always have to create a new build and copy that build to your static directory.