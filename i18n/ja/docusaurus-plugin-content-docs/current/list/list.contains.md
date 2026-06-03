---
title: List.Contains
---

# List.Contains


リストに値が含まれているかどうかを示します。


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

リストに指定した値が含まれているかどうかを示します。リストに値が見つかった場合は `true` を返します、それ以外の場合は `false` を返します。

-   `list`: 検索するリスト。
-   `value`: リストで検索する値。
-   `equationCriteria`: (オプション) 2 つの値が等しいかどうかを判断するために使用される比較子。


## Examples

### Example #1
リスト \{1, 2, 3, 4, 5\} に 3 が含まれているかどうかを判断します。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
リスト \{1, 2, 3, 4, 5\} に 6 が含まれているかどうかを判断します。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
大文字と小文字を無視して、リストに "rhrbrb" が含まれているかどうかを判断します。
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
リストに 2022 年 4 月 8 日の日付が含まれているかどうかを判断します。
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
