---
title: Text.PositionOf
---

# Text.PositionOf


Palauttaa arvon ensimmäisen sijainnin (-1, jos sitä ei löydy).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Palauttaa tekstiarvon `substring` määritetyn esiintymän sijainnin, joka löytyy kohdasta `text`. Valinnaista parametriä `occurrence`, voidaan käyttää määrittämään palautettava esiintymäsijainti (oletusarvoisesti ensimmäinen esiintymä). Palauttaa arvon -1, jos arvoa `substring` ei löydy.

`comparer` on `vertailutoiminto`, jota käytetään vertailun hallintaan. Vertailutoiminnoilla voidaan tarjota kirjainkoon ohittavia tai maa- ja aluekohtaiset asetukset huomioivia vertailuja.

Seuraavat sisäiset vertailutoiminnot on saatavilla kaavan kielellä:

-   `Comparer.Ordinal`: Käytetään tarkan järjestyslukuvertailun suorittamiseen
-   `Comparer.OrdinalIgnoreCase`: Käytetään tarkan kirjainkoon ohittavan järjestyslukuvertailun suorittamiseen
-   `Comparer.FromCulture`: Käytetään maa-asetukset huomioivan vertailun suorittamiseen


## Examples

### Example #1
Hae tekstin "World" ensimmäisen esiintymän sijainti tekstissä "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Hae tekstin "World" viimeisen esiintymän sijainti tekstissä "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
