---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Retourne le résultat de l'exécution d'une requête native sur une source de données ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Retourne le résultat de l'exécution de `query` avec la chaîne de connexion `connectionString` en utilisant le fournisseur ADO.NET `providerName`. `connectionString` peut être du texte ou un enregistrement de paires propriété-valeur. Les valeurs des propriétés peuvent être du texte ou un nombre. Vous pouvez fournir un paramètre d'enregistrement facultatif `options` pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `SqlCompatibleWindowsAuth` : Logique (true/false) qui détermine la création d'options de chaîne de connexion compatible avec SQL Server pour l'authentification Windows. La valeur par défaut est true.



## Category
Accessing data
