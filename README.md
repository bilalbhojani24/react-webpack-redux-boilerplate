# SYMBO BOILDER PLATE

## How to use this Boiler plate

1. git clone "https://...link"
2. git checkout branchname
3. npm install / yarn install [Depends on your package manager]
4. npm start / yarn start

## About

1. In this we have used, master-child relationship architecture which means it will have to follow same architecture at master level [root files] and child level [independent modules or pages under root module].

2. /assets => This folder will be consist of styles, images, fonts, vidoes etc with independent folders for each. This should have globals assets only.

3. /components => This folder will be consist of global and reusable components. Follow IOC[Inversion of control] technique for each component, which means independent style and props dependent.

4. /config => This folder will consist of all the root level configs like apiConfigs, routeConfigs, etc

5. /constants => This folder will be collection of constants used across application.

6. /helper => This folder will be consist of helpers functions and utills for the application

7. /modules => This folder is optional and it should consist only independent modules

8. /redux => This folder consist the logic of redux and RTK query based on branch selected.

9. /pages => This will be consisting of independent pages and with below mentioned folder structure

### Rules at folder level

1. Always follow same folder structure for consistency and easy code readability

2. /subComponents => It should consist breakups of components which will be used in the current folder. Also each component should follow the IOC[Inversion of control] architecture, which means seprate CSS for each component and component should be dependent on props and no hard-coding

3. /redux => This folder should have whole redux logic. If there is no redux needed for the folder delete this folder. 
For reference :-  Checkout root/redux/todo folder

4. services => This folder will be consist of all the service calls with respect to current folder.
For reference :- Checkout root/redux/todo/sagas.ts [line - 10]

5. helper => This folder will be combination of all the utilities for the current folder

6. data => This folder will be consist of data, contants, images etc

## Rules

1. fileName and folderName should be in camelCase format.
2. For props using interface is must
3. User React.FC for component archtecture
