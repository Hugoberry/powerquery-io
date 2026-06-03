---
title: List.PositionOfAny
---

# List.PositionOfAny


リスト内の値の最初のオフセットを返します。


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

指定された値のリストの項目が、リスト内に出現するオフセットを返します。該当する項目が見つからない場合は -1 を返します。

-   `list`: 検索するリスト。
-   `values`: 元のリストで検索する値のリスト。
-   `occurrence`: (省略可能) 報告する特定の出現箇所。この値には、`Occurrence.First`、`Occurrence.Last`、または`Occurrence.All` を指定できます。`occurrence` が指定されていない場合は、`Occurrence.First` が使用されます。
-   `equationCriteria`: (省略可能) 値を比較するときに等しいかどうかを判断する方法を指定します。このパラメーターには、キー セレクター関数、比較子関数、またはキー セレクターと比較子の両方を含むリストを指定できます。


## Examples

### Example #1
リスト \{1, 2, 3\} 内で値 2 または 3 が出現する最初の位置を求めます。
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```


### Example #2
リスト内で、2022 または 2023 からの日付になっている、すべてのインスタンスのポジションを検索します。
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
大文字と小文字を無視して、犬または猫という単語がリスト内で最後に現れた位置を検索します。
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
リスト内で、17 と 28 の 2 つの単位内にある任意のポジションを検索します。
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
