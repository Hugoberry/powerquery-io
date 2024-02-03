---
title: Table.Profile
---

# Table.Profile


## Description

Hiermee wordt een profiel van de kolommen van een tabel geretourneerd.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Hiermee wordt een profiel geretourneerd voor de kolommen in <code>table</code>.<br />De volgende informatie wordt geretourneerd voor elke kolom (waar van toepassing):<ul>  <li>minimum</li>  <li>maximum</li>  <li>gemiddeld</li>  <li>standaardafwijking</li>  <li>aantal</li>  <li>null-aantal</li>  <li>uniek aantal</li></ul><br />



## Category
Table.Information
