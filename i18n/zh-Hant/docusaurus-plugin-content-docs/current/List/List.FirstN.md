---
title: List.FirstN
---

# List.FirstN


## Description

指定要傳回的項目數或限定條件，以傳回清單中的第一組項目。


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>如果指定了數字，最多傳回該數量的項目。</li>  <li>如果指定了條件，則傳回最初符合條件的所有項目。一旦有項目不符合條件，就不再考慮其他項目。</li> </ul>


## Examples

### Example #1 
找出清單 \{3, 4, 5, -1, 7, 8, 2} 中大於 0 的初始值。
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
