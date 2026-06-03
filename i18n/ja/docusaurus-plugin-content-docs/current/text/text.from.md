---
title: Text.From
---

# Text.From


指定された値からテキスト値を作成します。


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

指定された値のテキスト表現を返します。

-   `value`: テキストに変換する値。この値には、`number`、`date`、`time`、`datetime`、`datetimezone`、`logical`、`duration`、または `binary` 値を指定できます。指定された値が `null` の場合、この関数は `null` を返します。
-   `culture`: (省略可能) 値をテキストに変換するときに使用するカルチャ (例: "en-US")。


## Examples

### Example #1
数値の 3 からテキスト値を作成します。
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
指定された日時に相当するテキストを取得します。
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
指定された日付と時刻に相当するドイツ語テキストを取得します。
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
16 進数としてエンコードされたテキストからバイナリ値を取得し、値をテキストに戻します。
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
フランスのデータを含むテーブルの行を取得し、フランス文化を使用して日付をテキストに変換します。
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
