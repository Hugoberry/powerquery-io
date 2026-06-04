---
title: Number.Sqrt
---

# Number.Sqrt


Vrne kvadratni koren števila.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Vrne kvadratni koren števila `number`. Če ima `number` ničelno vrednost, `Number.Sqrt` vrne"null". Če je negativna vrednost, je vrnjeno `Number.NaN` (ni število).


## Examples

### Example #1
Poiščite kvadratni koren števila 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Poiščite kvadratni koren števila 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
