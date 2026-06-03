---
title: List.MatchesAll
---

# List.MatchesAll


リスト内のすべての値によって条件関数が満たされる場合、true を返します。


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

リスト内のすべての値によって条件関数 が満たされる場合は `true`、それ以外の場合は `false` を返します。

-   `list`: チェックする値を含むリスト。
-   `condition`: リスト内の値に対してチェックする条件。


## Examples

### Example #1
リスト \{11, 12, 13\} 内のすべての値が 10 を超えるかどうかを判断します。
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
リスト \{1, 2, 3\} 内のすべての値が 10 を超えるかどうかを判断します。
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
大文字と小文字を区別せずに、リスト内のすべてのテキスト値に "anna" が含まれているかどうかを判断します。
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
すべての日付に 2021 年が含まれているかどうかを判断します。
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
