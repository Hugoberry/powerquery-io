---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Vrne kvadratni koren števila.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Vrne kvadratni koren števila <code>number</code>.    Če ima <code>number</code> ničelno vrednost, <code>Number.Sqrt</code> vrne "null". Če je negativna vrednost, je vrnjeno <code>Number.NaN</code> (ni število).


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
