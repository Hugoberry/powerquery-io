---
title: List.Modes
---

# List.Modes


傳回清單中最常出現的值清單。


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

傳回最常出現在 `list` 中的項目。如果清單空白，則引發錯誤。如果多個項目以相同的最大頻率出現，則傳回所有項目。 您可以指定選用的比較準則值 `equationCriteria`，以控制相等測試。


## Examples

### Example #1
找出清單 `{"A", 1, 2, 3, 3, 4, 5, 5}` 中最常出現的幾個項目。
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
