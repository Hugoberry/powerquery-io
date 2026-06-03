---
title: List.MatchesAny
---

# List.MatchesAny


如果有任何值符合條件函數，即傳回 True。


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

如果清單中的任何值符合條件函數，即傳回 `true`，否則傳回 `false`。

-   `list`: 包含要檢查的值的清單。
-   `condition`: 要根據清單中的值檢查的條件。


## Examples

### Example #1
判斷清單 \{9, 10, 11\} 中是否有任何值大於 10。
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
判斷清單 \{1, 2, 3\} 中是否有任何值大於 10。
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
判斷清單中是否有任何文字值包含「cat」，同時忽略大小寫。
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
判斷是否有任何日期包含年份 2021。
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
