---
title: Table.Profile
---

# Table.Profile


## Description

Returnerar en profil av en tabells kolumner.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Returnerar en profil för kolumnerna i <code>table</code>.<br />Följande information returneras för varje kolumn (när så är tillämpbart):<ul>  <li>minimum</li>  <li>maximum</li>  <li>medel</li>  <li>standardavvikelse</li>  <li>antal</li>  <li>nullantal</li>  <li>distinkt antal</li></ul><br />



## Category
Table.Information
