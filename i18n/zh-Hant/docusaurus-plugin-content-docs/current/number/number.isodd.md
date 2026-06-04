---
title: Number.IsOdd
---

# Number.IsOdd


指出值是否為奇數。


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

指出值是否為奇數。如果 `number` 是奇數，傳回 `true`，否則傳回 `false`。


## Examples

### Example #1
檢查 625 是否為奇數。
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
檢查 82 是否為奇數。
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
