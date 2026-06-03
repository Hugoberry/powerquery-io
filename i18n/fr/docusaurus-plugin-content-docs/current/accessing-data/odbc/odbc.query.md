---
title: Odbc.Query
---

# Odbc.Query


Retourne le résultat de l'exécution d'une requête native sur une source de données ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Retourne le résultat de l'exécution de `query` avec la chaîne de connexion `connectionString` en utilisant ODBC. `connectionString` peut être du texte ou un enregistrement de paires propriété-valeur. Les valeurs de propriété peuvent être du texte ou un nombre. Vous pouvez fournir un paramètre d'enregistrement facultatif `options` pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `ConnectionTimeout` : Délai qui contrôle le temps d’attente avant l’abandon d’une tentative pour établir une connexion au serveur. La valeur par défaut est 15 secondes.
-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `SqlCompatibleWindowsAuth` : Logique (true/false) qui détermine la création d'options de chaîne de connexion compatible avec SQL Server pour l'authentification Windows. La valeur par défaut est true.


## Examples

### Example #1
Renvoie le résultat de l'exécution d'une requête simple sur la chaîne de connexion fournie.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
