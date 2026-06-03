---
title: Table.Profile
---

# Table.Profile


Restituisce un profilo delle colonne di una tabella.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Restituisce un profilo per le colonne in `table`.

Per ogni colonna vengono restituite le informazioni seguenti (se applicabile):

-   minimo
-   massimo
-   media
-   deviazione standard
-   conteggio
-   conteggio valori Null
-   conteggio valori univoci



## Category
Table.Information
