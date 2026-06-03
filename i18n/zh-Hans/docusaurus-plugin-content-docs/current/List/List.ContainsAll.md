---
title: List.ContainsAll
---

# List.ContainsAll


指示一个列表是否包含另一个列表中的所有值。


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

指示列表是否包含另一个列表中的所有值。如果在列表中找到所有值，则返回 `true`，否则返回 `false`。

-   `list`: 要搜索的列表。
-   `values`: 要在第一个列表中搜索的值的列表。
-   `equationCriteria`: (可选)用于确定两个值是否相等的比较器。


## Examples

### Example #1
确定列表 \{1, 2, 3, 4, 5\} 是否包含 3 和 4。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
确定列表 \{1, 2, 3, 4, 5\} 是否包含 5 和 6。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
确定列表是否包含狗和马，同时忽略大小写。
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
确定列表是否包含日期 2022 年 4 月 8 日和 2021 年 7 月 6 日。
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
