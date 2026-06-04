---
title: List.Sum
---

# List.Sum


傳回清單中項目的總和。


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

傳回清單 `list` 中非 null 值的總和。如果清單中沒有非 Null 值，則傳回 Null。


## Examples

### Example #1
找出清單 `{1, 2, 3}` 中數字的總和。
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
