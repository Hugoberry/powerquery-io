---
title: Number.IsOdd
---

# Number.IsOdd


Navodi da li je vrednost neparan broj.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Navodi da li je vrednost neparan broj. Vraća `true` ako je `number` neparan broj, a `false` ako nije.


## Examples

### Example #1
Provera da li je 625 neparan broj.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Provera da li je 82 neparan broj.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
