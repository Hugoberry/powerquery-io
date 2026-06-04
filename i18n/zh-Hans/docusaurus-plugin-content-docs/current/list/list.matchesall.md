---
title: List.MatchesAll
---

# List.MatchesAll


如果列表中的所有值均满足条件函数，则返回 true。


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

如果列表中的所有值均满足条件函数，则返回 `true`，否则返回 `false`。

-   `list`: 包含要检查的值的列表。
-   `condition`: 针对列表中的值进行检查的条件。


## Examples

### Example #1
确定列表 \{11, 12, 13\} 中的所有值是否大于 10。
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
确定列表 \{1, 2, 3\} 中的所有值是否大于 10。
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
确定列表中的所有文本值在忽略大小写时是否都包含 "anna"。
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
确定所有日期是否都包含 2021 年。
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
