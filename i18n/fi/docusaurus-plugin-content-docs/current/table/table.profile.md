---
title: Table.Profile
---

# Table.Profile


Palauttaa taulukon sarakkeiden profiilin.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Palauttaa profiilin sarakkeille kohteessa `table`.

Seuraavat tiedot palautetaan kullekin sarakkeelle (tilanteen mukaan):

-   vähimmäisarvo
-   enimmäisarvo
-   keskiarvo
-   keskihajonta
-   määrä
-   tyhjäarvojen määrä
-   erillisten määrä



## Category
Table.Information
