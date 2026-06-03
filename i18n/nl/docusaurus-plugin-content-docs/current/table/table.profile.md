---
title: Table.Profile
---

# Table.Profile


Hiermee wordt een profiel van de kolommen van een tabel geretourneerd.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Hiermee wordt een profiel geretourneerd voor de kolommen in `table`.

De volgende informatie wordt geretourneerd voor elke kolom (waar van toepassing):

-   minimum
-   maximum
-   gemiddeld
-   standaardafwijking
-   aantal
-   null-aantal
-   uniek aantal



## Category
Table.Information
