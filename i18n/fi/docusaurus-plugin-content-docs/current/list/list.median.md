---
title: List.Median
---

# List.Median


Palauttaa luettelon mediaaniarvon.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Palauttaa luettelon `list` mediaanikohteen. Tämä funktio palauttaa `null`\-tyhjäarvon, jos luettelossa ei ole muita kuin `null`\-tyhjäarvoja. Jos kohteita on parillinen määrä, funktio valitsee pienemmän kahdesta mediaanikohteesta, ellei luettelo muodostu kokonaan päivämääristä ja kellonajoista, kestoista ja kohteiden määristä, missä tapauksessa se palauttaa kahden kohteen keskiarvon.


## Examples

### Example #1
Selvitä luettelon `{5, 3, 1, 7, 9}` mediaanikohde.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
