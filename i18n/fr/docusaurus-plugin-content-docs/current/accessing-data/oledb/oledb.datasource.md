---
title: OleDb.DataSource
---

# OleDb.DataSource


Retourne une table des tables et vues SQL de la source de données OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Renvoie une table des tables et vues SQL provenant de la source de données OLE DB spécifiée par la chaîne de connexion `connectionString`. `connectionString` peut s'agir de texte ou d'un enregistrement de paires nom-valeur de propriétés. Les valeurs de propriété peuvent être du texte ou un nombre. Un paramètre d'enregistrement facultatif `options` peut être fourni pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `CreateNavigationProperties` : Valeur logique (true/false) qui indique si des propriétés de navigation doivent être générées pour les valeurs retournées (valeur par défaut : true).
-   `NavigationPropertyNameGenerator` : Fonction utilisée pour la création des noms de propriétés de navigation.
-   `Query` : Requête SQL native utilisée pour récupérer des données. Si la requête produit plusieurs jeux de résultats, seul le premier est retourné.
-   `HierarchicalNavigation` : Valeur logique (true/false) qui indique si les tables à afficher doivent être regroupées en fonction de leurs noms de schémas (valeur par défaut : true).
-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut dépend du pilote.
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `SqlCompatibleWindowsAuth` : Logique (true/false) qui détermine la création d'options de chaîne de connexion compatible avec SQL Server pour l'authentification Windows. La valeur par défaut est true.

Le paramètre record est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\] ou \[Query = "select ..."\], par exemple.



## Category
Accessing data
