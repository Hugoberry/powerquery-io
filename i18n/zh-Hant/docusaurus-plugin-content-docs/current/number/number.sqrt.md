---
title: Number.Sqrt
---

# Number.Sqrt


傳回數字的平方根。


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

傳回 `number` 的平方根。 如果 `number` 是 Null，`Number.Sqrt` 會傳回 Null。如果是負值，則傳回 `Number.NaN` (不是數字)。


## Examples

### Example #1
找出 625 的平方根。
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
找出 85 的平方根。
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
