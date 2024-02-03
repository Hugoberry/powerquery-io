---
title: Number.Sqrt
---

# Number.Sqrt


## Description

返回数的平方根。


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

返回 <code>number</code> 的平方根。    如果 <code>number</code> 为 null，则 <code>Number.Sqrt</code> 返回 null。如果它是负值，则返回 <code>Number.NaN</code> (不是数字)。


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
