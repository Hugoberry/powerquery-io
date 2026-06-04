---
title: List.ContainsAll
---

# List.ContainsAll


指出清單是否包含另一個清單中的所有值。


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

指出清單是否包含所有來自其他清單的值。如果在清單中找到所有值，則傳回 `true`，否則傳回 `false`。

-   `list`: 要搜尋的清單。
-   `values`: 要在第一個清單中搜尋的值的清單。
-   `equationCriteria`: (選用) 用來判斷兩個值是否相等的比較子。


## Examples

### Example #1
判斷清單 \{1, 2, 3, 4, 5\} 是否包含 3 和 4。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
判斷清單 \{1, 2, 3, 4, 5\} 是否包含 5 和 6。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
判斷清單是否包含狗和馬，並忽略大小寫。
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
判斷清單是否包含 2022 年 4 月 8 日和 2021 年 7 月 6 日的日期。
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
