---
title: List.Distinct
---

# List.Distinct


重複が削除された値のリストを返します。


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

重複が削除された、指定したリスト内のすべての値を含むリストを返します。指定したリストが空の場合、結果は空のリストです。

-   `list`: 固有の値を抽出する元となるリスト。
-   `equationCriteria`: (省略可能) 値を比較するときに等しいかどうかを判断する方法を指定します。このパラメーターには、キー セレクター関数、比較子関数、またはキー セレクターと比較子の両方を含むリストを指定できます。


## Examples

### Example #1
リスト \{1, 1, 2, 3, 3, 3\} から重複を削除します。
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
一覧の末尾から始めて、テキストの長さが一意の果物を選択します。
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
一覧の先頭から始めて、大文字と小文字を区別せずに一意の果物を選択します。
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
大文字と小文字を区別せずに、一意の国名を持つ最初のリストをリストの一覧から抽出します。抽出したリストを新しいテーブルの行に配置します。
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
