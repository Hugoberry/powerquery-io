---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Retourne la collection de schémas d'une source de données ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Retourne la collection de schémas de la source de données ADO.NET avec le nom de fournisseur `providerName` et la chaîne de connexion `connectionString`. `connectionString` peut être du texte ou un enregistrement de paires propriété-valeur. Les valeurs de propriété peuvent être du texte ou un nombre. Vous pouvez fournir un paramètre d'enregistrement facultatif `options` pour spécifier des propriétés supplémentaires. L'enregistrement peut contenir les champs suivants :

-   `CommandTimeout` : Délai qui contrôle le temps d’exécution d’une requête côté serveur avant que celle-ci ne soit annulée. La valeur par défaut correspond à dix minutes.
-   `SqlCompatibleWindowsAuth` : Logique (true/false) qui détermine la création d'options de chaîne de connexion compatible avec SQL Server pour l'authentification Windows. La valeur par défaut est true.
-   `TypeMap`



## Category
Accessing data
