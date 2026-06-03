---
title: List.PositionOf
---

# List.PositionOf


リスト内の値のオフセットを返します。


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

指定された値がリスト内に出現するオフセットを返します。値が出現しない場合は -1 を返します。

-   `list`: 検索するリスト。
-   `value`: リストで検索する値。
-   `occurrence`: (省略可能) 報告する特定の出現箇所。この値には、`Occurrence.First`、`Occurrence.Last`、または`Occurrence.All` を指定できます。`occurrence` が指定されていない場合は、`Occurrence.First` が使用されます。
-   `equationCriteria`: (省略可能) 値を比較するときに等しいかどうかを判断する方法を指定します。このパラメーターには、キー セレクター関数、比較子関数、またはキー セレクターと比較子の両方を含むリストを指定できます。


## Examples

### Example #1
リスト \{1, 2, 3\} 内で値 3 が出現する位置を求めます。
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```


### Example #2
リスト内で 2022 年の日付の全ての出現箇所を検索します。
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
リスト内で単語 dog が最後に現れる位置を、大文字小文字を無視して検索します。
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
リスト内で、数値 28 の 2 つの単位内のポジションを見つけます。
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
