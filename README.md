# Weather App

## About

This is the React client for a simple weather app for the [Varsity Hype](https://www.varsityhype.com/) coding challenge.
![Weather App](/public/assets/githubimages/WeatherApp.png)

## Prerequisites

[Node.js](https://nodejs.org/en/download/)

## Installation

Clone the repo.

```bash
git clone https://github.com/rsamhollyer/weather-client.git
cd weather-client
```

Install dependencies.

```bash
npm install
```

## Usage

### Proxy location

The Node server for the app with instructions to install is available [here](https://github.com/rsamhollyer/weather-server).
The app is served to port 9999 by default. If you change the server port don't forget to update the proxy in the `package.json` file to match.

![Proxy](/public/assets/githubimages/Proxy.png)

### Developing with React

The app runs from the server repo. If you need to make any changes, run the React server along with the [back end](https://github.com/rsamhollyer/weather-server).

```bash
npm start
```

Once you finish making changes to the client, you will need to update the backend.

```bash
npm run build
```

This will create a build directory in your root. It is already included in `.gitignore`. Move all the contents inside this `build/` directory to the server `public/` directory.
