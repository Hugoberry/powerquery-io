---
title: List.PositionOf
---

# List.PositionOf


返回列表中值的偏移量。


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

返回在列表中显示指定值的偏移量。如果值未显示，则返回 -1。

-   `list`: 要搜索的列表。
-   `value`: 要在列表中查找的值。
-   `occurrence`: (可选)要报告的特定事件。此值可以为 `Occurrence.First`、`Occurrence.Last` 或 `Occurrence.All`。如果未指定 `occurrence`，则使用 `Occurrence.First`。
-   `equationCriteria`: (可选)指定比较值时如何确定相等性。此参数可以是键选择器函数、比较器函数或同时包含键选择器和比较器的列表。


## Examples

### Example #1
查找列表 \{1, 2, 3\} 中出现值 3 的位置。
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
在列表中查找 2022 年所有日期实例的位置。
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
在列表中查找单词 dog 最后一次出现的位置，忽略大小写。
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
在列表中查找与数字 28 的差值在两个单位内的位置。
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
