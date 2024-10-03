# Locker Integration 

## Available Scripts

In the project directory, you can run:

### `npm run start-dev`

to start the local env server

## Starting the project

cd into the project folder / open a terminal from the IDE and run `npm install`, after everything is installed run `npm run start-dev`

## Components 

there are 3 components in the lockerapp 

1. App: which just renders and holds the other components
2. Buttons: which renders the the Button components and passes in the props(values) for every button.
3. Button:
   Takes 3 props: text which is the displayed text, icon: which is the full name of the image including format eg: .png, .jpg that is in the assets folder, lockerId: which is the number of the locker that it should unlock
   renders a button with an image based on the props passed by the Buttons component and calls the callLockerApi function passing in the lockerId

## Functions

   There is one function 

   callLockedApi(lockerId)

   takes lockerId as a parameter.
   has 2 variables URL: the url to the locker and apiKey: which is the api key, no need to explain further.

   the function uses axios to make an http POST request to the lockers end point with an empty object as a body might need to be changed in the future
