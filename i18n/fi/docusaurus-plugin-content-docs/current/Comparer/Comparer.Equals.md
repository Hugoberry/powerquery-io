---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Palauttaa loogisen arvon kahden annetun arvon yhtäläisyystarkistuksen perusteella.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Palauttaa <code>logical</code>-arvon kahden annetun arvon yhtäläisyystarkistuksen perusteella <code>x</code> ja <code>y</code> käyttämällä annettua <code>comparer</code>.      <div>        <code>comparer</code> on <code>vertailutoiminto</code>, jota käytetään vertailun hallintaan.        Vertailutoiminto on funktio, joka hyväksyy kaksi argumenttia ja palauttaa arvon -1, 0 tai 1 sen mukaan, onko ensimmäinen arvo pienempi, yhtä suuri tai suurempi kuin toinen.        Vertailutoiminnoilla voidaan tarjota kirjainkoolla ei-merkitystä tai maa-asetusta ja aluekohtaisia vertailuja.      </div>      <div>        Kaavakielellä on seuraavat valmiit vertailutoiminnot:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Käytetään tarkan järjestyslukuvertailun suorittamiseen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Käytetään tarkan kirjainkokoa merkitsemättömän vertailun suorittamiseen</li>        <li> <code>Comparer.FromCulture</code>: Käytetään maa-asetusta käyttävän vertailun suorittamiseen</li>      </ul>


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
