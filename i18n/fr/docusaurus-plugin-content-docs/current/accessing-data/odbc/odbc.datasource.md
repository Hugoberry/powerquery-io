---
title: Odbc.DataSource
---

# Odbc.DataSource


Retourne une table de tables et d'onglets SQL à partir de la source de données ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retourne une table de tables et de vues SQL à partir de la source de données ODBC spécifiée par la chaîne de connexion `connectionString`. `connectionString` peut être du texte ou un enregistrement de paires propriété-valeur. Les valeurs de propriété peuvent être du texte ou un nombre. Vous pouvez fournir un paramètre d'enregistrement facultatif `options` pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `CreateNavigationProperties` : Valeur logique (true/false) qui indique si des propriétés de navigation doivent être générées pour les valeurs retournées (valeur par défaut : true).
-   `HierarchicalNavigation` : Valeur logique (true/false) qui indique si les tables à afficher doivent être regroupées en fonction de leurs noms de schémas (valeur par défaut : false).
-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut est 15 secondes.
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `SqlCompatibleWindowsAuth` : Logique (true/false) qui détermine la création d'options de chaîne de connexion compatible avec SQL Server pour l'authentification Windows. La valeur par défaut est true.


## Examples

### Example #1
Renvoie les tables et vues SQL à partir de la chaîne de connexion fournie.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
