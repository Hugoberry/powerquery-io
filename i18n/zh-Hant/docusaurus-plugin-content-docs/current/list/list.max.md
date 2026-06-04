---
title: List.Max
---

# List.Max


傳回最大值，或針對空的清單傳回預設值。


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

如果清單是空的，則會傳回清單中的最大項目或選用預設值。

-   `list`：值清單。
-   `default`：(選用) 如果清單是空的，則為要傳回的值。
-   `comparisonCriteria`：(選用) 在進行比較之前用來轉換值的函式。如果此參數是 `null`，則會比較這些值，無需進行任何變換。
-   `includeNulls`：(選用) 指出在決定最大項目時是否應該包含清單中的 `null` 值。預設值為 `true`。


## Examples

### Example #1
尋找指定清單中的最大值。
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
尋找指定清單中的最大值，如果空白，則傳回 -1。
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
在依字母順序排在最後的文字值清單中尋找此項目。如果清單是空的，則傳回 "none"。
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
從德文日期清單中尋找最近的日期。如果清單是空的，則傳回 2000 年 1 月 1 日。
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
