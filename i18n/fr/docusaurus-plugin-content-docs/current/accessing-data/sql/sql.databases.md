---
title: Sql.Databases
---

# Sql.Databases


Retourne une table de bases de données dans un SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Renvoie une table des bases de données sur le serveur SQL spécifié, `server`. Un paramètre d'enregistrement facultatif `options` peut être spécifié pour contrôler les options suivantes :

-   `CreateNavigationProperties` : Valeur logique (true/false) qui indique si des propriétés de navigation doivent être générées pour les valeurs retournées (valeur par défaut : true).
-   `NavigationPropertyNameGenerator` : Fonction utilisée pour la création des noms de propriétés de navigation.
-   `MaxDegreeOfParallelism` : Nombre qui définit la valeur de la clause de requête "maxdop" dans la requête SQL générée.
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut dépend du pilote.
-   `HierarchicalNavigation` : Valeur logique (true/false) qui indique si les tables à afficher doivent être regroupées en fonction de leurs noms de schémas (valeur par défaut : false).
-   `MultiSubnetFailover` : Valeur logique (true/false) qui définit la valeur de la propriété "MultiSubnetFailover" dans la chaîne de connexion (valeur par défaut : false).
-   `UnsafeTypeConversions` : Valeur logique (true/false) qui, si elle est définie sur true, tente de replier des conversions de type qui peuvent échouer et provoquer l’échec de la requête entière. Ceci n’est pas recommandé pour un usage général.
-   `ContextInfo` : Valeur binaire utilisée pour définir CONTEXT\_INFO avant l'exécution de chaque commande.
-   `OmitSRID` : Valeur logique (true/false) qui, si elle est définie sur true, omet le SRID lors de la production de langage Well-Known Text à partir de types géométriques et géographiques.
-   `EnableCrossDatabaseFolding` : Valeur logique (true/false) qui, si la valeur est true, autorise le pliage des requêtes entre les bases de données sur le même serveur. La valeur par défaut est false.

Le paramètre record est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\], par exemple.  
  
Ne prend pas en charge la configuration d'une requête SQL à exécuter sur le serveur. `Sql.Database` devrait être utilisé à la place pour exécuter une requête SQL.



## Category
Accessing data
