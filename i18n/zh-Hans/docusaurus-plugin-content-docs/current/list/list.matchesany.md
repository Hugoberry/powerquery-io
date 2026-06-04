---
title: List.MatchesAny
---

# List.MatchesAny


如果任意值满足条件函数，则返回 true。


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

如果列表中的任意值满足条件函数，则返回 `true`，否则返回 `false`。

-   `list`: 包含要检查的值的列表。
-   `condition`: 针对列表中的值进行检查的条件。


## Examples

### Example #1
确定列表 \{9, 10, 11\} 中的任意值是否大于 10。
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
确定列表 \{1, 2, 3\} 中的任意值是否大于 10。
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
确定列表中的任何文本值是否包含 "cat"，同时忽略大小写。
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
确定任何日期是否都包含 2021 年。
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
