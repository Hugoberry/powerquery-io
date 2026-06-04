---
title: List.PositionOfAny
---

# List.PositionOfAny


返回列表中值的第一个偏移量。


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

返回指定值列表中的项显示在列表中时的偏移量。如果未找到任何事件，则返回 -1。

-   `list`: 要搜索的列表。
-   `values`: 要在原始列表中查找的值的列表。
-   `occurrence`: (可选)要报告的特定事件。此值可以为 `Occurrence.First`、`Occurrence.Last` 或 `Occurrence.All`。如果未指定 `occurrence`，则使用 `Occurrence.First`。
-   `equationCriteria`: (可选)指定比较值时如何确定相等性。此参数可以是键选择器函数、比较器函数或同时包含键选择器和比较器的列表。


## Examples

### Example #1
查找列表 \{1, 2, 3\} 中第一次出现值 2 或 3 的位置。
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
在列表中查找 2022 或 2023 年所有日期实例的位置。
```powerquery
let
    Source = {
        #date(2021, 5, 10),
        #date(2022, 6, 28),
        #date(2023, 7, 15),
        #date(2025, 12, 31),
        #date(2022, 4, 8),
        #date(2024, 3, 20)
    },
    YearList = List.Transform(Source, each Date.Year(_)),
    TargetYear = {2022, 2023},
    FindPositions = List.PositionOfAny(YearList, TargetYear, Occurrence.All)
in
    FindPositions
```

Result: 
```powerquery
{1, 2, 4}
```


### Example #3
在列表中查找单词 dog 或 cat 最后一个匹配项的位置，忽略大小写。
```powerquery
let
    Source = List.PositionOfAny(
        {"dog", "cat", "DOG", "pony", "bat", "rabbit", "dOG"},
        {"dog", "cat"},
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
在列表中查找与数字 17 或 28 的差值在两个单位以内的任何位置。
```powerquery
let
    Source = { 10, 15, 20, 25, 30 },
    Position = List.PositionOfAny(
        Source,
        {17, 28},
        Occurrence.All,
        (x, y) => Number.Abs(x - y) <= 2
    )
in
    Position
```

Result: 
```powerquery
{1, 4}
```




## Category
List.Membership functions
