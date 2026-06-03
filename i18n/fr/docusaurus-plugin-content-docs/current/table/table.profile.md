---
title: Table.Profile
---

# Table.Profile


Retourne un profil des colonnes d'une table.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Retourne un profil pour les colonnes dans `table`.

Les informations suivantes sont retournées pour chaque colonne (si applicable) :

-   minimum
-   maximum
-   moyenne
-   écart type
-   nombre total
-   nombre d'éléments null
-   nombre d'éléments distincts



## Category
Table.Information
