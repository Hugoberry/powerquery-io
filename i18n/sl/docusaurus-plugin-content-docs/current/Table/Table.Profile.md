---
title: Table.Profile
---

# Table.Profile


## Description

Vrne profil stolpcev tabele.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

Vrne profil za stolpce v <code>table</code>.<br />Za vsak stolpec (kadar je na voljo) so vrnjene te informacije:<ul>  <li>minimalno</li>  <li>maksimalno</li>  <li>povprečno</li>  <li>standardni odklon</li>  <li>število</li>  <li>štetje vrednosti null</li>  <li>razlikovalno štetje</li></ul><br />



## Category
Table.Information
