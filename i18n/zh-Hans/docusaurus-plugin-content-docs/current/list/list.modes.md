---
title: List.Modes
---

# List.Modes


返回列表中出现最多的值的列表。


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

返回 `list` 中最常出现的项。如果列表为空，则引发错误。如果多个项以相同的最大频率显示，则返回所有项。 可以指定可选的比较条件值 `equationCriteria` 来控制相等性测试。


## Examples

### Example #1
查找列表 `{"A", 1, 2, 3, 3, 4, 5, 5}` 中出现最多的项。
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
