---
title: Number.Sqrt
---

# Number.Sqrt


## Description

A szám négyzetgyökét adja vissza.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

A(z) <code>number</code> négyzetgyökét adja vissza.     Ha a(z) <code>number</code> érték null, a <code>Number.Sqrt</code> függvény nullértéket ad vissza. Ha az érték negatív, a függvény <code>Number.NaN</code> (nem szám) értéket ad vissza.


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
