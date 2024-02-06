---
title: List.Distinct
---

# List.Distinct


傳回移除重複項之後的值清單。


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

傳回清單，內含清單 <code>list</code> 中移除重複項後的所有值。如果清單是空的，則結果是空白清單。


## Examples

### Example #1 
移除清單 \{1, 1, 2, 3, 3, 3} 中的重複項。
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
