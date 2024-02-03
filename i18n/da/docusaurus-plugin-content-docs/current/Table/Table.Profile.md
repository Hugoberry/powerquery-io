---
title: Table.Profile
---

# Table.Profile


## Description

Returnerer en profil for en tabels kolonner.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Returnerer en profil for kolonnerne i <code>table</code>.<br />Følgende oplysninger returneres for hver kolonne (når relevant):<ul>  <li>minimum</li>  <li>maksimum</li>  <li>gennemsnit</li>  <li>standardafvigelse</li>  <li>antal</li>  <li>null antal</li>  <li>distinkt antal</li></ul><br />



## Category
Table.Information
