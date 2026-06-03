---
title: List.MatchesAny
---

# List.MatchesAny


いずれかの値によって条件関数が満たされる場合、true を返します。


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

リスト内のいずれかの値によって条件関数 が満たされる場合は `true`、それ以外の場合は `false` を返します。

-   `list`: チェックする値を含むリスト。
-   `condition`: リスト内の値に対してチェックする条件。


## Examples

### Example #1
リスト \{9, 10, 11\} 内のいずれかの値が 10 を超えるかどうかを判断します。
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
リスト \{1, 2, 3\} 内のいずれかの値が 10 を超えるかどうかを判断します。
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
大文字と小文字を区別せずに、リスト内のすべてのテキスト値に "cat" が含まれているかどうかを判断します。
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
いずれかの日付に 2021 年が含まれているかどうかを判断します。
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
