---
title: MySQL.Database
---

# MySQL.Database


Retourne une table des tables SQL, des onglets et des fonctions scalaires stockés disponibles dans une base de données MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Renvoie une table des tables SQL, vues et fonctions scalaires stockées disponibles dans une base de données MySQL sur le serveur `server` au sein de l'instance de base de données nommée `database`. Le port peut être spécifié en option avec le serveur, séparé par deux-points. Un paramètre d'enregistrement facultatif `options` peut être spécifié pour contrôler les options suivantes :

-   `Encoding` : Valeur TextEncoding qui spécifie le jeu de caractères utilisé pour encoder toutes les requêtes envoyées au serveur (la valeur par défaut est null).
-   `CreateNavigationProperties` : Valeur logique (true/false) qui indique si des propriétés de navigation doivent être générées pour les valeurs retournées (valeur par défaut : true).
-   `NavigationPropertyNameGenerator` : Fonction utilisée pour la création des noms de propriétés de navigation.
-   `Query` : Requête SQL native utilisée pour récupérer des données. Si la requête produit plusieurs jeux de résultats, seul le premier est retourné.
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut dépend du pilote.
-   `TreatTinyAsBoolean` : Valeur logique (true/false) qui détermine si les colonnes tinyint doivent être forcées sur le serveur en tant que valeurs logiques. La valeur par défaut est true.
-   `OldGuids` : Valeur logique (true/false) qui indique si les colonnes char(36) (si la valeur est false) ou les colonnes binary(16) (si la valeur est true) doivent être traitées en tant que GUID. La valeur par défaut est false.
-   `ReturnSingleDatabase` : Valeur logique (true/false) qui indique si toutes les tables de toutes les bases de données doivent être retournées (si la valeur est false), ou si les tables et les vues de la base de données spécifiée doivent être retournées (si la valeur est true). La valeur par défaut est false.
-   `HierarchicalNavigation` : Valeur logique (true/false) qui indique si les tables à afficher doivent être regroupées en fonction de leurs noms de schémas (valeur par défaut : false).

Le paramètre record est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\] ou \[Query = "select ..."\], par exemple.



## Category
Accessing data
