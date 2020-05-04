Steps to proceed:


1) Clone or download this project with your preferenced control-version tool.

2) Enter to the console and type <code>npm i</code> inside the root project folder to install the packages needed to run the app correctly, including the ngrx/store framework.

Now, for an easy understanding of the application, we splitted the structure in diverse folders for an improve maintenance:

 - The store folder contains all the elements related to the ngrx/store framework, the data, behaviours, etc. Inside this folder we can find another three folders, such as:

	a) Actions: Here we store the files where that contains the "actions" (things that can do) that represent the main events occurring thoughout our application.

	b) Models: Here lies two files, the model as a representation of the movie item inside of our store, and the interface for our state.

	c) Reducers: Here we can find the JSON file that contains all the movie list data, and also the function that manages the current state of the app.

 - It's important to check both <code>app.module.ts</code> and <code>app.component.ts</code> inside the app folder, as they contain some code that launches functions and events.

 - For the UI, we decided to implement Bootstrap, you can check the <code>styles.scss</code> file, inside the src folder. We imported directly, as we also declared some CSS selectors
to improve the good looking of the app.
