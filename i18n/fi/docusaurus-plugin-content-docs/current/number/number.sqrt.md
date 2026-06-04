---
title: Number.Sqrt
---

# Number.Sqrt


Palauttaa luvun neliöjuuren.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Palauttaa luvun `number` neliöjuuren. Jos `number` on tyhjäarvo, `Number.Sqrt` palauttaa tyhjäarvon. Jos se on negatiivinen arvo, `Number.NaN` palautetaan (muu kuin luku).


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
