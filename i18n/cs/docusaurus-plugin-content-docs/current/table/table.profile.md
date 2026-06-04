---
title: Table.Profile
---

# Table.Profile


Vrátí profil sloupců tabulky.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Vrátí profil pro sloupce v: `table`.

Pro každý sloupec se vrátí následující informace (v odpovídajících případech):

-   minimum
-   maximum
-   průměr
-   směrodatná odchylka
-   počet
-   počet hodnot null
-   počet jedinečných hodnot



## Category
Table.Information
