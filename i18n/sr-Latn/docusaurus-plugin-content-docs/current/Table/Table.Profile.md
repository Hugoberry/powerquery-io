---
title: Table.Profile
---

# Table.Profile


## Description

Vraća profil kolona tabele.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Vraća profil za kolone u <code>table</code>.<br />Sledeće informacije se vraćaju za svaku kolonu (kada je primenjivo):<ul>  <li>minimalno</li>  <li>maksimalno</li>  <li>prosek</li>  <li>standardna devijacija</li>  <li>broj</li>  <li>broj bez vrednosti</li>  <li>posebno brojanje</li></ul><br />



## Category
Table.Information
