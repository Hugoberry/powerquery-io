---
title: Text.EndsWith
---

# Text.EndsWith


Ilmaisee, päättyykö teksti määritettyyn arvoon.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Ilmaisee, päättyykö annettu teksti `text` määritettyyn arvoon `substring`. Ilmaisin on kirjainkoon huomioiva.

`comparer` on `Vertailutoiminto`, jota käytetään vertailun hallintaan. Vertailutoiminnoilla voidaan tarjota kirjainkoon ohittavia tai maa- ja aluekohtaiset asetukset huomioivia vertailuja.

Seuraavat sisäiset vertailutoiminnot ovat saatavilla kaavan kielellä:

-   `Comparer.Ordinal`: Käytetään tarkan järjestyslukuvertailun suorittamiseen
-   `Comparer.OrdinalIgnoreCase`: Käytetään tarkan kirjainkoon ohittavan järjestyslukuvertailun suorittamiseen
-   `Comparer.FromCulture`: Käytetään maa-asetukset huomioivan vertailun suorittamiseen


## Examples

### Example #1
Tarkista, päättyykö teksti "Hello, World" tekstiin "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Tarkista, päättyykö teksti "Hello, World" tekstiin "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
