---
title: DB2.Database
---

# DB2.Database


Retourne une table de tables SQL et de vues disponibles dans une base de données Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Renvoie une table des tables et vues SQL disponibles dans une base de données Db2 sur le serveur `server`, au sein de l'instance de base de données nommée `database`. Le port peut être spécifié en option avec le serveur, séparé par deux-points. Un paramètre d'enregistrement facultatif `options` peut être spécifié pour contrôler les options suivantes :

-   `CreateNavigationProperties` : Valeur logique (true/false) qui indique si des propriétés de navigation doivent être générées pour les valeurs retournées (valeur par défaut : true).
-   `NavigationPropertyNameGenerator` : Fonction utilisée pour la création des noms de propriétés de navigation.
-   `Query` : Requête SQL native utilisée pour récupérer des données. Si la requête produit plusieurs jeux de résultats, seul le premier est retourné.
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut dépend du pilote.
-   `HierarchicalNavigation` : Valeur logique (true/false) qui indique si les tables à afficher doivent être regroupées en fonction de leurs noms de schémas (valeur par défaut : false).
-   `Implementation` : Spécifie l'implémentation du fournisseur de base de données interne à utiliser. Valeurs valides : "IBM" et "Microsoft".
-   `BinaryCodePage` : Nombre permettant au CCSID (Coded Character Set Identifier) de décoder les données binaires Db2 FOR BIT en chaînes de caractères. S'applique à Implementation = "Microsoft". Définissez la valeur sur 0 pour désactiver la conversion (par défaut). Définissez la valeur sur 1 pour effectuer la conversion en fonction de l'encodage de la base de données. Définissez d'autres nombres CCSID pour effectuer la conversion en fonction de l'encodage de l'application.
-   `PackageCollection` : Spécifie une valeur de chaîne pour la collection de paquets (valeur par défaut : "NULLID") afin de permettre l'utilisation des paquets partagés nécessaires au traitement des instructions SQL. S'applique à Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Spécifie si la connexion est effectuée par le biais d'une passerelle DB2 Connect. S'applique à Implementation = "Microsoft".

Le paramètre record est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\] ou \[Query = "select ..."\], par exemple.



## Category
Accessing data
