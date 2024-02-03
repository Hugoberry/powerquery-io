---
title: List.Reverse
---

# List.Reverse


## Description

反轉清單中值的順序。


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

傳回清單，內含清單 <code>list</code> 中的值依相反順序排列。


## Examples

### Example #1 
根據 \{1..10} 建立順序相反的清單。
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
