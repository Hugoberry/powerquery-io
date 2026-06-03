---
title: PostgreSQL.Database
---

# PostgreSQL.Database


Retourne une table des tables SQL et des onglets disponibles dans une base de données PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Renvoie une table des tables et vues SQL disponibles dans une base de données PostgreSQL sur le serveur `server` au sein de l'instance de base de données nommée `database`. Le port peut être spécifié en option avec le serveur, séparé par deux-points. Un paramètre d'enregistrement facultatif `options` peut être spécifié pour contrôler les options suivantes :

-   `CreateNavigationProperties` : Valeur logique (true/false) qui indique si des propriétés de navigation doivent être générées pour les valeurs retournées (valeur par défaut : true).
-   `NavigationPropertyNameGenerator` : Fonction utilisée pour la création des noms de propriétés de navigation.
-   `Query` : Requête SQL native utilisée pour récupérer des données. Si la requête produit plusieurs jeux de résultats, seul le premier est retourné.
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut dépend du pilote.
-   `HierarchicalNavigation` : Valeur logique (true/false) qui indique si les tables à afficher doivent être regroupées en fonction de leurs noms de schémas (valeur par défaut : false).

Le paramètre record est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\] ou \[Query = "select ..."\], par exemple.



## Category
Accessing data
