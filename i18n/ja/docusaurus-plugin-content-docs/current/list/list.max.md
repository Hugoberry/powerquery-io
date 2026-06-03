---
title: List.Max
---

# List.Max


最大値または空のリストの既定値を返します。


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

リスト内の最大の項目を返すか、リストが空の場合は省略可能な既定値を返します。

-   `list`: 値のリスト。
-   `default`: (省略可能) リストが空の場合に返す値。
-   `comparisonCriteria`: (省略可能) 比較前に値を変換するために使用する関数。このパラメーターが `null` の場合、値は変換されずに比較されます。
-   `includeNulls`: (省略可能) リスト内の `null` 値を最大項目の判定に含めるかどうかを示します。既定値は `true` です。


## Examples

### Example #1
指定されたリスト内の最大値を検索します。
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
指定されたリストから最大値を求め、空の場合は -1 を返します。
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
テキスト値のリストからアルファベット順で最後の項目を検索します。リストが空の場合は "none" を返します。
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
ドイツの日付のリストから最新の日付を検索します。リストが空の場合は、2000 年 1 月 1 日を返します。
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
