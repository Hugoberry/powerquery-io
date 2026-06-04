---
title: Number.IsOdd
---

# Number.IsOdd


Označuje, ali je vrednost liho število.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Označuje, ali je vrednost liho število. Vrne `true`, če je `number` liho število, sicer vrne `false`.


## Examples

### Example #1
Preverite, ali je 625 liho število.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Preverite, ali je 82 liho število.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
