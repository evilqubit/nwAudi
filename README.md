# nhAudi

![nodejs](http://i.imgur.com/lyuVpPg.png)

## Nodejs Tutorial


### Environment setup
* install [Atom](https://atom.io/) Code editor
* install [Docker](https://www.docker.com/) Container
* Docker image Debian or CentOS
* Install [Robomongo](https://robomongo.org/download)
* install [ngrok](https://ngrok.com/)
* Install on docker container:

 * Nodejs (latest)
 * Mongodb (latest)
 * Redis
 * Git client
 * PostgreSQL

Create a Docker hub save and push the image .

>> Kindly stop any antivirus or web service like IIS or apache running on the machine

### Schedule
<table  cellpadding="100" border="1">
<thead>
<tr>
<th>Monday</th>
<th>Tuesday</th>
<th>Wednesday</th>
<th>Thursday</th>
<th>Friday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Intro to Node.js | Events | streams | Modules </td>
<td>Installing Express and building first routes | Middlewares. </td>
<td> ES2015: Objects, Strings | Arrays, Maps, and Sets </td>
<td>ES2015: Classes and Modules | Promises, Iterators, and Generators </td>
<td> build a unit test for our bot</td>
</tr>
<tr>
<td>Error Handling in nodejs</td>
<td>User Params | Body Parser | refactoring routes </td>
<td> Building your facebook bot with nodejs  </td>
<td>Mqtt Deploying another express instance that interact with the FbBot</td>
<td> creating a (phantom js) like crawler and using async </td>
</tr>
<tr>
<td>ES2015 Declaration+Functions </td>
<td> Build your Express.js App With TDD</td>
<td>Facebook Bot (continue) + Fetching 3rd parties apis  </td>
<td>Code mask on </td>
<td>General Discussion(browserfy-electron-jhonny5)</td>
</tr>
<tr>
<td>Building A cam stream server Using a raspberry pi and web sockets </td>
<td>Express Angular mongodb : build your own seed</td>
<td>Redis integration - Socket.io brief </td>
<td>Building testing unit using mocha-jasmin-nodeunit </td>
<td>Q & A</td>
</tr>
</tbody>
</table>


### Using Dockers
* In the Dockerfile make sure to install nodemon 
`npm install -g nodemon`

* In the package.json or Dockerfile the script to start should have nodemon -L app.js

* When running the docker link the source folder to the docker folder by running the below script
`docker run -it --name node-web-app -p 8080:8080 -v $(pwd):/usr/src/app -d node-web-app`

* To redeploy a docker image you need to remove the docker container and the image and run the build again
```
docker stop <<container-id>>
docker rm <<container-id>>
docker rmi <<image-id>>
docker build -t node-web-app .
```

* To go into a docker bash run the below code 
`docker exec -it <container-id> bash`