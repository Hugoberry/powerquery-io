---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Podatki kocke za uvoz/DirectQuery iz storitve AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Vrne podatke kocke iz storitve AtScale v strežniku <code>server</code>. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:<ul>        <li><code>TypedMeasureColumns</code>: logična vrednost, ki označuje, ali bodo tipi, navedeni v večdimenzionalnem ali tabelaričnem modelu, uporabljeni za tipe dodanih stolpcev z merami. Če je ta možnost nastavljena na "false", bo tip "number" uporabljen za vse stolpce z merami. Privzeta vrednost te možnosti je "false".</li>        <li><code>CommandTimeout</code>: trajanje (v sekundah), ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika. </li>        <li><code>ConnectionTimeout</code>: trajanje (v sekundah), ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika. </li></ul>Parameter zapisa je naveden kot [možnost1 = vrednost1, možnost2 = vrednost2 ...].


