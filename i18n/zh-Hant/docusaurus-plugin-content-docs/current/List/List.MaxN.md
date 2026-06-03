---
title: List.MaxN
---

# List.MaxN


傳回清單中的最大值。必須指定要傳回的值數目或篩選條件。


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

傳回指定清單中的最大值。資料列排序之後，可以指定選用參數來進一步篩選結果。

-   `list`: 值清單。
-   `countOrCondition`: 指定要傳回的值數目或篩選條件。如果指定了一個數字，則會以遞減順序傳回最多 `countOrCondition` 個項目的清單。如果指定了條件，則傳回的清單包含所有符合條件的項目。
-   `comparisonCriteria`: (選用) 在進行比較之前用來轉換值的函數。如果此參數是 `null`，則會比較這些值，無需進行任何變換。
-   `includeNulls`: (選用) 指出在決定最大項目時是否應該包含清單中的 `null` 值。預設值為 `true`。


## Examples

### Example #1
尋找指定清單中的前 5 個值。
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
尋找超過 3 個字元的字詞。
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
從德文日期清單中尋找三個最近的日期。
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
