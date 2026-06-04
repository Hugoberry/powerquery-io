---
title: Number.IsNaN
---

# Number.IsNaN


Označuje, ali je vrednost"NaN"(ni število).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Označuje, ali je vrednost"NaN"(ni številka). Vrne `true`, če je `number` enak `Number.IsNaN`, sicer vrne `false`.


## Examples

### Example #1
Preverite, ali je 0 deljeno z 0"NaN".
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Preverite, ali je 1 deljeno z 0"NaN".
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
