---
title: List.Transform
---

# List.Transform


## Description

傳回根據此清單所導出的新值清單。


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

對清單 <code>list</code> 套用轉換函數 <code>transform</code>，以傳回新的值清單。


## Examples

### Example #1 
將清單 \{1, 2} 中的每個值加 1。
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
