# SETUP BACK END - NODE.TS 3 COUCHES 

### NEEDED DEPENDENCIES

npm i express -
npm i cors -
npm i -D ts-node -
npm i -D typescript -
npm i body-parser -
npm i mysql -
(npm i promise-mysql)

npm i -D @types/node -
npm i -D @types/express -
npm i -D @types/cors -
npm i -D @types/body-parser - 
npm i -D @types/mysql

## SETUP STEP BY STEP

1. Créer un dossier

2. L'initialiser en tant que dossier-node avec npm init puis run les commandes suivantes : npm i express - npm i cors

3. Créer un dossier 'src' avec un fichier 'main.ts' dedans

4. Ajouter les fichiers tsconfig.json et tslint.json puis importer express et faire un test de lancement seveur après avoir installer les dépendances suivantes : npm i -D ts-node - npm i -D typescript - npm i -D @types/node - npm i -D @types/express

5. Créer un dossier 'loaders' dans src avec un fichier 'index.ts' dedans

6. Exporter une function dedans prenant en paramètre une (app: Application);

7. Créer un fichier 'express.ts' dans le fichier 'loaders' exportant lui aussi une fonction contenant les appels du cors et du body-parser sous le formant JSON

8. Appeler le ficher 'express.ts' dans la fonction exportée de 'loaders/index.ts'

9. Appeler le dossier 'loaders' dans la fonction serveur de 'main.ts'

10. Créer un dossier 'controller' avec un fichier 'user.controller.ts' dedans et exporter une fonction dans ce fichier prennent en paramètre une app: Application 

( OPTIONNEL - 10.bis. - Installer nodemon et le run ) 

11. Créer un dossier 'service' avec dedans un fichier 'user.service.ts' et exporter une classe dans ce fichier contenant une méthode getAll() retournant le résultat de la requête i.e avec une requête GET 

12. Créer une variable service de type UserService dans le fichier 'user.controller' et appelé la methode souhaitée

13. Créer un dossier 'repository' avec un fichier 'user.repository.ts' contenant une classe dedans

14. Ajouter un fichier 'mysql.ts' dans le dossier 'loaders' et y ajouter la config mySql

(14.bis La configuration de mysql peut se faire de la façon originale ou en utilisant la dépendence promise-sql en rendant la fonction de configuation asynchrone et l'object de la configuration en 'await'

## ( BONUS -  Configurer un singleton DBHelper dans un dossier 'core' )

15. Créer une class dans le fichier 'db.helper.ts' et l'exporter

16. Dans cette classe, créer une propriété privée statique 'instance' de type 'DB:Helper (du même nom de la classe)' et une méthode statique 'get' changeant la valeur d'"instance" en tant que Db:Helper si celle la n'existe pas déjà et retouner 'instance' et mettre un constructor privé

17. Ajouter une variable connection: Connection dans la classe et ajouter une méthode public prennant comme paramètre une connection qui donnera sa valeur à la connection présent dans le singleton 

18. Créer une méthode 'setConnection()' prennant en paramètre une sqlRequest: string et un params OPT

19. Appeler la fonction get() dans le fichier 'user.controller'

20. Ajouter une variable db: DBhelper.get() dans le fichier 'mysql' et appeler cette variable-fonction en lui passant comme paramètre l'objet du Connection (la config mysql)


