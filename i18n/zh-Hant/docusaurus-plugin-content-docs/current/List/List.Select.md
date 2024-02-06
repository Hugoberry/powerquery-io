---
title: List.Select
---

# List.Select


傳回符合條件的值清單。


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

根據清單 <code>list</code> 傳回符合選取條件 <code>selection</code> 的值清單。


## Examples

### Example #1 
找出清單 \{1, -3, 4, 9, -2} 中大於 0 的值。
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
