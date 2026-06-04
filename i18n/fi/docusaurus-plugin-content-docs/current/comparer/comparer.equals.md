---
title: Comparer.Equals
---

# Comparer.Equals


Palauttaa loogisen arvon kahden annetun arvon yhtäläisyystarkistuksen perusteella.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Palauttaa `logical`\-arvon kahden annetun arvon yhtäläisyystarkistuksen perusteella `x` ja `y` käyttämällä annettua `comparer`.

`comparer` on `vertailutoiminto`, jota käytetään vertailun hallintaan. Vertailutoiminto on funktio, joka hyväksyy kaksi argumenttia ja palauttaa arvon -1, 0 tai 1 sen mukaan, onko ensimmäinen arvo pienempi, yhtä suuri tai suurempi kuin toinen. Vertailutoiminnoilla voidaan tarjota kirjainkoolla ei-merkitystä tai maa-asetusta ja aluekohtaisia vertailuja.

Kaavakielellä on seuraavat valmiit vertailutoiminnot:

-   `Comparer.Ordinal`: Käytetään tarkan järjestyslukuvertailun suorittamiseen
-   `Comparer.OrdinalIgnoreCase`: Käytetään tarkan kirjainkokoa merkitsemättömän vertailun suorittamiseen
-   `Comparer.FromCulture`: Käytetään maa-asetusta käyttävän vertailun suorittamiseen


## Examples

### Example #1
Vertaa kohteita 1 ja A käyttäen kieliasetusta en-US ja selvitä, ovatko arvot yhtäläiset.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
