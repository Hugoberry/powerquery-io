---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Palauttaa yhden luettelokohteen luettelolle, jonka pituus on yksi, ja oletusarvon tyhjälle luettelolle.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Jos luettelossa `list` on vain yksi kohde, palauttaa kyseisen kohteen. Jos luettelo on tyhjä, funktio palauttaa tyhjäarvon, ellei valinnaista kohdetta `default` ole määritetty. Jos luettelossa on useampi kuin yksi kohde, funktio palauttaa virheen.


## Examples

### Example #1
Selvitä luettelon \{1\} yksittäinen arvo.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2
Selvitä luettelon \{\} yksittäinen arvo.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3
Selvitä luettelon \{\} yksittäinen arvo. Jos se on tyhjä, palauta arvo -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
