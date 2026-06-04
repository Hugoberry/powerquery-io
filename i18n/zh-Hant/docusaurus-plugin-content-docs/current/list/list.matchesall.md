---
title: List.MatchesAll
---

# List.MatchesAll


如果清單中的所有值都符合條件函數，即傳回 True。


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

如果清單中的所有值都符合條件函數，即傳回 `true`，否則傳回 `false`。

-   `list`: 包含要檢查的值的清單。
-   `condition`: 要根據清單中的值檢查的條件。


## Examples

### Example #1
判斷清單 \{11, 12, 13\} 中是否所有值都大於 10。
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
判斷清單 \{1, 2, 3\} 中是否所有值都大於 10。
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
判斷是否清單中的所有文字值都包含「anna」，同時請忽略大小寫。
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
判斷是否所有日期都包含年份 2021。
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
