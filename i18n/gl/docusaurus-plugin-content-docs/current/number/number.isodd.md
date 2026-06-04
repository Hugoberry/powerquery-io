---
title: Number.IsOdd
---

# Number.IsOdd


Indica se o valor é impar.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Indica se o valor é impar. Devolve `true` se `number` é un número impar, se non, `false`.


## Examples

### Example #1
Comprobar se 625 é un número impar.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Comprobar se 82 é un número impar.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
