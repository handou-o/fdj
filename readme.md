# FDJ Exercice
## Tech

- Docker
- Mongodb - 4.4
- Angular - 17.3
-- Angular material pour certaines UI
- node - 18


## [DEV] Installation

Installer les dependances
Installer docker et docker compose

lancer les containers (le container front-prod peut etre desactivé)
```sh
docker compose up
```
Restaurer la base de donner mongo

```sh
docker cp sports fdj-mongodb-1:/sports
"Attacher un shell au container mongodb"
mongorestore /dump
```


# Variable d'environment 
- api: 
    * MONGODB_URL correspond a l'url mongo (avec ou sans login)
    * PORT
- front-ssr: 
    * API_URL correspond a l'url de l'api (utilisation d'un reverse proxy)
    * PORT

# Documentation 
Une documentation swagger est disponible sur le container api
http://localhost:3000/doc
