---
title: Access.Database
---

# Access.Database


Retourne une représentation structurelle d'une base de données Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Retourne une représentation structurelle d'une base de données Access, `database`. Un paramètre d'enregistrement facultatif `options` peut être spécifié pour contrôler les options suivantes :

-   `CreateNavigationProperties` : Valeur logique (true/false) qui indique si des propriétés de navigation doivent être générées pour les valeurs retournées (valeur par défaut : false).
-   `NavigationPropertyNameGenerator` : Fonction utilisée pour la création des noms de propriétés de navigation.

Le paramètre record est spécifié sous la forme \[option1 = valeur1, option2 = valeur2...\], par exemple.



## Category
Accessing data
