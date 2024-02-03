---
title: Table.Profile
---

# Table.Profile


## Description

Vráti profil stĺpcov tabuľky.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Vráti profil pre stĺpce v tabuľke <code>table</code>.<br />Pre každý stĺpec sa vrátia nasledujúce informácie (podľa vhodnosti):<ul>  <li>minimum</li>  <li>maximum</li>  <li>priemer</li>  <li>štandardná odchýlka</li>  <li>počet</li>  <li>počet hodnôt typu null</li>  <li>počet jedinečných hodnôt</li></ul><br />



## Category
Table.Information
