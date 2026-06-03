---
title: List.ContainsAll
---

# List.ContainsAll


リストに他のリストのすべての値が含まれているかどうかを示します。


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

リストに別のリストのすべての値が含まれているかどうかを示します。リストにすべての値が見つかった場合は `true` を返します、それ以外の場合は `false` を返します。

-   `list`: 検索するリスト。
-   `values`: 最初のリストで検索する値のリスト。
-   `equationCriteria`: (オプション) 2 つの値が等しいかどうかを判断するために使用される比較子。


## Examples

### Example #1
リスト \{1, 2, 3, 4, 5\} に 3 と 4 が含まれているかどうかを判断します。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
リスト \{1, 2, 3, 4, 5\} に 5 と 6 が含まれているかどうかを判断します。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
リストに犬と馬が含まれているかどうかを判断しますが、大文字と小文字は無視します。
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
リストに 2022 年 4 月 8 日と 2021 年 7 月 6 日の日付が含まれているかどうかを判断します。
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
