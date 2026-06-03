---
title: List.ContainsAny
---

# List.ContainsAny


指出清單是否包含另一個清單中的任何值。


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

指出清單是否包含任何來自其他清單的值。如果在清單中找到該值，則傳回 `true`，否則傳回 `false`。

-   `list`: 要搜尋的清單。
-   `values`: 要在第一個清單中搜尋的值的清單。
-   `equationCriteria`: (選用) 用來判斷兩個值是否相等的比較子。


## Examples

### Example #1
判斷清單 \{1, 2, 3, 4, 5\} 是否包含 3 或 9。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
判斷清單 \{1, 2, 3, 4, 5\} 是否包含 6 或 7。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
判斷清單是否包含馬或貓頭鷹，並忽略大小寫。
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
判斷清單是否包含 2022 年 4 月 8 日或 2021 年 1 月 12 日的日期。
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
