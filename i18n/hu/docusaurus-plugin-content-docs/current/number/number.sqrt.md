---
title: Number.Sqrt
---

# Number.Sqrt


A szám négyzetgyökét adja vissza.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

A(z) `number` négyzetgyökét adja vissza. Ha a(z) `number` érték null, a `Number.Sqrt` függvény nullértéket ad vissza. Ha az érték negatív, a függvény `Number.NaN` (nem szám) értéket ad vissza.


## Examples

### Example #1
A 625 szám négyzetgyökének meghatározása
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
A 85 szám négyzetgyökének meghatározása
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
