# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Subsequently, a responsive frontend application based on Javascript is created using technologies such as React DOM router Material.UI to design the components, use HOOKS to manage the status and perform actions on components. The project allows you to list and search for API characters (Ricky Morty) on cards in alphabetical order, add characters to a favorites list and view the details as appropriate for a selected character. Finally the user will be able to move around with the navigation Appbar

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### API https://rickandmortyapi.com/api
The URL contains information about Ricky and Morty characters. All requests are GET requests and go over HTTPS. All responses will return data in json. For the project, the GET was executed to list all the characters from '/characters' and filter individually by character ID with '/characters/id'.

Now the only difference in both calls is that when listing all the characters we obtain a json with 2 objects of type 'info' and 'results' and the one we want to map is 'results' which contains all the necessary data of the characters. On the other hand, when calling a single character to see its detail, it already comes directly

GET https://rickandmortyapi.com/api/character
{
  "info": {
    ...
  },
  "results": [
    {
      ...
    }
  ]
}

GET https://rickandmortyapi.com/api/character/2
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  ...
}
