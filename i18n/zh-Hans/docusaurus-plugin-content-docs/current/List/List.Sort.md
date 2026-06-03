---
title: List.Sort
---

# List.Sort


根据指定的条件对数据列表排序。


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

根据指定的可选条件对数据列表 `list` 进行排序。 可选参数 `comparisonCriteria` 可以指定为比较条件。这可以采用以下值:

-   要控制顺序，比较条件可以为“顺序”枚举值。(`Order.Descending`, `Order.Ascending`).
-   要计算要用于排序的键，可以使用 1 个参数的函数。
-   要同时选择键并控制顺序，比较条件可以为包含键和顺序的列表(`{each 1 / _, Order.Descending}`)。
-   要完全控制比较，可使用 2 个参数的函数(例如 Value.Compare)。此函数将从列表中传递两个项(任意两项、任意顺序)。该函数应返回以下其中一个值:
    -   `-1`: 第一项小于第二项。
    -   `0`: 项相等。
    -   `1`: 第一项大于第二项。


## Examples

### Example #1
将列表 \{2, 3, 1\} 排序。
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
按降序将列表 \{2, 3, 1\} 排序。
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
使用 Value.Compare 方法按降序将列表 \{2, 3, 1\} 排序。
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
