# Weather App

## Install Node

You need to have [Node](https://nodejs.org/en/download/) installed.
Alternatively, you can use these [commands](https://nodejs.org/en/download/package-manager/)

## Clone repo

Create a local directory. Initialize it with git

```
git init
```

Clone down the repo.

```
git clone https://github.com/rsamhollyer/weather-client.git
```

## Install Dependencies

```bash
npm install
```

![Weather App](/public/assets/githubimages/WeatherApp.png)

## Proxy location

The app is being served to port 9999. If you change the server port don't forget to update the proxy in the package.json file to match.

![Proxy](/public/assets/githubimages/Proxy.png)

## Run React server (optional)

The app runs from the server repo. If you need to make any changes, run the React server along with the created back end.

```
npm start

```

## To create a build version (optional)

If you make any changes to the client, you will need to update the backend.

```
npm run build
```

This will create a build directory in your root. It is already ignored by git. Move all the contents inside this directory to the server public directory.
