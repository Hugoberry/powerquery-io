---
title: List.Product
---

# List.Product


## Description

返回列表中的数的乘积。


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

返回列表 <code>numbersList</code> 中的非 null 数的乘积。如果列表中没有非 null 值，则返回 null。


## Examples

### Example #1 
计算列表 &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; 中的数的乘积。
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
