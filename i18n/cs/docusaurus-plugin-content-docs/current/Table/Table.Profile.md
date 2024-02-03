---
title: Table.Profile
---

# Table.Profile


## Description

Vrátí profil sloupců tabulky.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Vrátí profil pro sloupce v: <code>table</code>.<br />Pro každý sloupec se vrátí následující informace (v odpovídajících případech):<ul><li>minimum</li><li>maximum</li><li>průměr</li><li>směrodatná odchylka</li><li>počet</li><li>počet hodnot null</li><li>počet jedinečných hodnot</li></ul><br />



## Category
Table.Information
