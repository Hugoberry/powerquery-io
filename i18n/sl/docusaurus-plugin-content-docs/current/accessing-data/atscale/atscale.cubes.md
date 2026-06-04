---
title: AtScale.Cubes
---

# AtScale.Cubes


Podatki kocke za uvoz/DirectQuery iz storitve AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Vrne podatke kocke iz storitve AtScale v strežniku `server`. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `TypedMeasureColumns`: logična vrednost, ki označuje, ali bodo tipi, navedeni v večdimenzionalnem ali tabelaričnem modelu, uporabljeni za tipe dodanih stolpcev z merami. Če je ta možnost nastavljena na"false", bo tip"number"uporabljen za vse stolpce z merami. Privzeta vrednost te možnosti je"false".
-   `CommandTimeout`: trajanje (v sekundah), ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.
-   `ConnectionTimeout`: trajanje (v sekundah), ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.

Parameter zapisa je naveden kot \[možnost1 = vrednost1, možnost2 = vrednost2 ...\].


## Examples

### Example #1
Prikaže podatke kocke v kocki storitve AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



