---
title: Number.Sqrt
---

# Number.Sqrt


返回数的平方根。


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

返回 `number` 的平方根。 如果 `number` 为 null，则 `Number.Sqrt` 返回 null。如果它是负值，则返回 `Number.NaN` (不是数字)。


## Examples

### Example #1
计算 625 的平方根。
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
计算 85 的平方根。
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
