---
title: List.Contains
---

# List.Contains


指出清單是否包含值。


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

指出清單是否包含指定的值。如果在清單中找到該值，則傳回 `true`，否則傳回 `false`。

-   `list`: 要搜尋的清單。
-   `value`: 要在清單中搜尋的值。
-   `equationCriteria`: (選用) 用來判斷兩個值是否相等的比較子。


## Examples

### Example #1
判斷清單 \{1, 2, 3, 4, 5\} 是否包含 3。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
判斷清單 \{1, 2, 3, 4, 5\} 是否包含 6。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
忽略大小寫，判斷清單是否包含 "rhubarb"。
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
判斷清單是否包含 2022 年 4 月 8 日這個日期。
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
