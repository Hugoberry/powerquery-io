---
title: List.Median
---

# List.Median


## Description

Palauttaa luettelon mediaaniarvon.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Palauttaa luettelon <code>list</code> mediaanikohteen. Tämä funktio palauttaa <code>null</code>-tyhjäarvon, jos luettelossa ei ole muita kuin <code>null</code>-tyhjäarvoja.    Jos kohteita on parillinen määrä, funktio valitsee pienemmän kahdesta mediaanikohteesta, ellei    luettelo muodostu kokonaan päivämääristä ja kellonajoista, kestoista ja kohteiden määristä, missä tapauksessa se palauttaa kahden kohteen keskiarvon.


## Examples

### Example #1 
Selvitä luettelon &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; mediaanikohde.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
