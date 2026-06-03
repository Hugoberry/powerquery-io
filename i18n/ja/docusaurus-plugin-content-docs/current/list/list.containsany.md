---
title: List.ContainsAny
---

# List.ContainsAny


リストに他のリストのいずれかの値が含まれているかどうかを示します。


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

リストに別のリストの値が含まれているかどうかを示します。リストに値が見つかった場合は `true` を返します、それ以外の場合は `false` を返します。

-   `list`: 検索するリスト。
-   `values`: 最初のリストで検索する値のリスト。
-   `equationCriteria`: (オプション) 2 つの値が等しいかどうかを判断するために使用される比較子。


## Examples

### Example #1
リスト \{1, 2, 3, 4, 5\} に 3 または 9 が含まれているかどうかを判断します。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
リスト \{1, 2, 3, 4, 5\} に 6 または 7 が含まれているかどうかを判断します。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
リストに馬かフクロウが含まれているかどうかを判断しますが、大文字と小文字は無視します。
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
リストに 2022 年 4 月 8 日または 2021 年 1 月 12 日の日付が含まれているかどうかを判断します。
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
