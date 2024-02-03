---
title: Table.Profile
---

# Table.Profile


## Description

Egy tábla oszlopainak profilját adja vissza.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

A(z) <code>table</code> oszlopainak profilját adja vissza.<br />Az egyes oszlopok esetében a következo adatokat adja vissza (ha lehetséges):<ul>  <li>minimum</li>  <li>maximum</li>  <li>átlag</li>  <li>szórás</li>  <li>szám</li>  <li>null szám</li>  <li>eltérok darabszáma</li></ul><br />



## Category
Table.Information
