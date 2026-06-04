---
title: Number.Log
---

# Number.Log


Palauttaa luvun logaritmin määritettyyn kantalukuun (oletus on e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Palauttaa luvun `number` logaritmin määritettyyn kantalukuun `base`. Jos `base` ei ole määritetty, oletusarvo on Number.E. Jos `number` on tyhjäarvo, `Number.Log` palauttaa tyhjäarvon.


## Examples

### Example #1
Hae luvun 2 kymmenkantainen (base 10) logaritmi.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Hae luvun 2 luonnollinen logaritmi.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
