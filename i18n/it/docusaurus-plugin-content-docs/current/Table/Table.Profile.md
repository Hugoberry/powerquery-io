---
title: Table.Profile
---

# Table.Profile


## Description

Restituisce un profilo delle colonne di una tabella.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Restituisce un profilo per le colonne in <code>table</code>.<br />Per ogni colonna vengono restituite le informazioni seguenti (se applicabile):<ul>  <li>minimo</li>  <li>massimo</li>  <li>media</li>  <li>deviazione standard</li>  <li>conteggio</li>  <li>conteggio valori Null</li>  <li>conteggio valori univoci</li></ul><br />



## Category
Table.Information
