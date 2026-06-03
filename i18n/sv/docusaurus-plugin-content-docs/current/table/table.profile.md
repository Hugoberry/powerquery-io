---
title: Table.Profile
---

# Table.Profile


Returnerar en profil av en tabells kolumner.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Returnerar en profil för kolumnerna i `table`.

Följande information returneras för varje kolumn (när så är tillämpbart):

-   minimum
-   maximum
-   medel
-   standardavvikelse
-   antal
-   nullantal
-   distinkt antal



## Category
Table.Information
