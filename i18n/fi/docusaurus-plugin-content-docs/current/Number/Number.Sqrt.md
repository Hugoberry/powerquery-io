---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Palauttaa luvun neliöjuuren.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Palauttaa luvun <code>number</code> neliöjuuren.    Jos <code>number</code> on tyhjäarvo, <code>Number.Sqrt</code> palauttaa tyhjäarvon. Jos se on negatiivinen arvo, <code>Number.NaN</code> palautetaan (muu kuin luku).


## Examples

### Example #1 
Selvitä luvun 625 neliöjuuri.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Selvitä luvun 85 neliöjuuri.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
