---
title: List.PositionOf
---

# List.PositionOf


傳回清單中值的位移。


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

傳回指定值出現在清單中的時差。如果值未出現，則傳回 -1。

-   `list`: 要搜尋的清單。
-   `value`: 要在清單中尋找的值。
-   `occurrence`: (選用) 要回報的特定出現次數。此值可以是 `Occurrence.First`、`Occurrence.Last` 或 `Occurrence.All`。如果未指定 `occurrence`，則使用 `Occurrence.First`。
-   `equationCriteria`: (選用) 指定在比較值時如何判定相等。此參數可以是鍵選取器函數、比較器函數，或同時包含鍵選取器和比較器的清單。


## Examples

### Example #1
找出值 3 在清單 \{1, 2, 3\} 中出現的位置。
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
尋找 2022 年所有日期執行個體在清單中的位置。
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2022, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = 2022,
    FindPositions = List.PositionOf(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 3, 4}
```


### Example #3
在清單中尋找單字狗 (dog) 最後一次出現的位置，忽略大小寫。
```powerquery
let
    Source = List.PositionOf(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        "dog",
        Occurrence.Last,
        Comparer.OrdinalIgnoreCase
    )
in
    Source
```

Result: 
```powerquery
6
```


### Example #4
尋找清單中距離數字 28 兩個單位內的位置。
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOf(
        Source,
        28,
        Occurrence.First,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
4
```




## Category
List.Membership functions
