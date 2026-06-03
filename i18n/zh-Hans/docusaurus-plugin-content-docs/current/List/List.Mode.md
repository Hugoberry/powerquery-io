---
title: List.Mode
---

# List.Mode


返回列表中出现最多的值。


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

返回 `list` 中最常出现的项。如果列表为空，则引发错误。如果多个项以相同的最大频率显示，则选择最后一个。 可以指定可选的比较条件值 `equationCriteria` 来控制相等性测试。


## Examples

### Example #1
查找列表 `{"A", 1, 2, 3, 3, 4, 5}` 中出现最多的项。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
查找列表 `{"A", 1, 2, 3, 3, 4, 5, 5}` 中出现最多的项。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
