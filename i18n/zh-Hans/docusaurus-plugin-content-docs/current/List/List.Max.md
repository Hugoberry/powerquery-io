---
title: List.Max
---

# List.Max


返回最大值，对于空列表则返回默认值。


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

返回列表中的最大项；如果列表为空，则返回可选的默认值。

-   `list`: 值列表。
-   `default`: (可选)列表为空时返回的值。
-   `comparisonCriteria`: (可选)用于在比较前转换值的函数。如果此参数为 `null`，则在无任何转换的情况下比较值。
-   `includeNulls`: (可选)指示是否在确定最大项时包含列表中的 `null` 值。默认值为 `true`。


## Examples

### Example #1
查找指定列表中的最大值。
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
查找指定列表中的最大值；如果列表为空，则返回 -1。
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
在文本值列表中查找按字母顺序排在最后的项。如果列表为空，则返回“无”。
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
从德国日期列表中查找最新日期。如果列表为空，则返回 2000 年 1 月 1 日。
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
