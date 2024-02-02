---
title: Table.Profile
---

# Table.Profile


## Description

Retourne un profil des colonnes d&#39;une table.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Retourne un profil pour les colonnes dans <code>table</code>.<br />Les informations suivantes sont retournées pour chaque colonne (si applicable) :<ul>  <li>minimum</li>  <li>maximum</li>  <li>moyenne</li>  <li>écart type</li>  <li>nombre total</li>  <li>nombre d'éléments null</li>  <li>nombre d'éléments distincts</li></ul><br />



## Category
Table.Information
