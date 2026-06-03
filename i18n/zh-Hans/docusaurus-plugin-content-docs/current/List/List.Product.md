---
title: List.Product
---

# List.Product


返回列表中的数的乘积。


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

返回列表 `numbersList` 中的非 null 数的乘积。如果列表中没有非 null 值，则返回 null。


## Examples

### Example #1
计算列表 `{1, 2, 3, 3, 4, 5, 5}` 中的数的乘积。
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
