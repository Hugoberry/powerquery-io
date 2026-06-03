---
title: List.LastN
---

# List.LastN


返回指定列表中最后一项或多项的列表。(可选)可指定要返回的值数或限定条件。


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

返回指定列表中最后一项或多项的列表。

-   `list`: 要检查的列表。如果列表为空，则返回空列表。
-   `countOrCondition`: (可选) 支持收集多项或筛选项。虽然此参数标为可选，但如果未提供此值或为 `null`，会导致错误。可通过两种方式指定此参数:
    -   如果指定了一个数字，则最多返回该数量的项。
    -   如果指定了条件，则从列表末尾开始，返回满足该条件的所有项。一旦某项不满足条件，将不再考虑后续项。


## Examples

### Example #1
查找列表 \{3, 4, 5, -1, 7, 8, 2\} 中的最后一个值。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
查找列表 \{3, 4, 5, -1, 7, 8, 2\} 中大于 0 的最后一个值。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
