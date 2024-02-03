---
title: Number.Log
---

# Number.Log


## Description

Palauttaa luvun logaritmin määritettyyn kantalukuun (oletus on e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Palauttaa luvun <code>number</code> logaritmin määritettyyn kantalukuun <code>base</code>. Jos <code>base</code> ei ole määritetty, oletusarvo on Number.E.    Jos <code>number</code> on tyhjäarvo, <code>Number.Log</code> palauttaa tyhjäarvon.


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
