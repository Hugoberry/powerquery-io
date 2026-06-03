---
title: List.Mode
---

# List.Mode


傳回清單中最常出現的值。


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

傳回最常出現在 `list` 中的項目。如果清單空白，則引發錯誤。如果多個項目以相同的最大頻率出現，則會選擇最後一個項目。 您可以指定選用的比較準則值 `equationCriteria`，以控制相等測試。


## Examples

### Example #1
找出清單 `{"A", 1, 2, 3, 3, 4, 5}` 中最常出現的項目。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
找出清單 `{"A", 1, 2, 3, 3, 4, 5, 5}` 中最常出現的項目。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
