---
title: List.MaxN
---

# List.MaxN


返回列表中的最大值。必须指定要返回的值的数量或筛选条件。


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

返回指定列表中的最大值。对行进行排序后，可指定可选参数进一步筛选结果。

-   `list`: 值列表。
-   `countOrCondition`: 指定要返回的值的数量或筛选条件。如果指定数字，则返回一个最多包含 `countOrCondition` 个项、按降序排序的列表。如果指定条件，则返回的值包含满足条件的所有项。
-   `comparisonCriteria`: (可选)用于在比较前转换值的函数。如果此参数为 `null`，则在无任何转换的情况下比较值。
-   `includeNulls`: (可选)指示是否在确定最大项时包含列表中的 `null` 值。默认值为 `true`。


## Examples

### Example #1
查找指定列表中的前 5 个值。
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
查找超过 3 个字符的单词。
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
从德国日期列表中查找最近的三个日期。
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
