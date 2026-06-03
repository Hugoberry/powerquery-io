---
title: List.MaxN
---

# List.MaxN


リスト内の最大値を返します。返される値の数またはフィルター条件を指定する必要があります。


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

指定されたリスト内の最大値を返します。行を並べ替えた後、省略可能なパラメーターを指定して結果をさらに絞り込むことができます。

-   `list`: 値のリスト。
-   `countOrCondition`: 返す値の数またはフィルター条件を指定します。数値が指定された場合は、降順で最大 `countOrCondition` 個の項目のリストが返されます。条件が指定された場合は、その条件を満たすすべての項目が含まれるリストが返されます。
-   `comparisonCriteria`: (省略可能) 比較する前に値を変換するために使用する関数。このパラメーターが `null` の場合、値は変換されずに比較されます。
-   `includeNulls`: (省略可能) リスト内の `null` 値を最大項目の判定に含めるかどうかを示します。既定値は `true` です。


## Examples

### Example #1
指定されたリストの上位 5 つの値を検索します。
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
3 文字より多い単語を検索します。
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
ドイツの日付のリストから最新の 3 つの日付を検索します。
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
