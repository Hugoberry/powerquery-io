---
title: List.MinN
---

# List.MinN


返回列表中的最小值。可以指定要返回的值的数量或筛选条件。


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

返回列表 `list` 中的最小值。 参数 `countOrCondition` 指定要返回的值的数量或筛选条件。可选参数 `comparisonCriteria` 指定如何比较列表中的值。

-   `list`: 值的列表。
-   `countOrCondition`: 如果指定一个数字，则返回以升序排序的最多包含 `countOrCondition` 个项的列表。如果指定条件，则返回从第一项开始满足该条件的项的列表。一旦某个项不满足该条件，则不再考虑其他项。如果此参数为 null，则返回列表中的一个最小值。
-   `comparisonCriteria`: *(可选)*可以指定可选的 `comparisonCriteria` 值来确定如何比较列表中的项。如果此参数为 null，则使用默认比较器。


## Examples

### Example #1
查找列表 `{3, 4, 5, -1, 7, 8, 2}` 中的 5 个最小值。
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
