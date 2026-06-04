---
title: Number.IsEven
---

# Number.IsEven


Označuje, ali je vrednost sodo število.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Označuje, ali je vrednost `number` sodo število, tako da vrne `true`, če je število sodo, sicer vrne `false`.


## Examples

### Example #1
Preverite, ali je 625 sodo število.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Preverite, ali je 82 sodo število.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
