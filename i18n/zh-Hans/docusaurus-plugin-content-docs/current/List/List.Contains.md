---
title: List.Contains
---

# List.Contains


指示列表是否包含值。


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

指示列表是否包含指定的值。如果在列表中找到值，则返回 `true`，否则返回 `false`。

-   `list`: 要搜索的列表。
-   `value`: 要在列表中搜索的值。
-   `equationCriteria`: (可选)用于确定两个值是否相等的比较器。


## Examples

### Example #1
确定列表 \{1, 2, 3, 4, 5\} 是否包含 3。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
确定列表 \{1, 2, 3, 4, 5\} 是否包含 6。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
忽略大小写，确定列表是否包含 "rhubarb"。
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
确定列表是否包含日期 2022 年 4 月 8 日。
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
