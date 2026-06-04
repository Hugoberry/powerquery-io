---
title: Number.IsOdd
---

# Number.IsOdd


Indica si el valor és imparell.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Indica si el valor és imparell. Retorna `true` si `number` és un nombre imparell o `false` en cas contrari.


## Examples

### Example #1
Comprova si 625 és un nombre imparell.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Comprova si 82 és un nombre imparell.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
