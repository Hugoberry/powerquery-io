---
title: Text.From
---

# Text.From


根據指定的值建立文字值。


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

傳回指定值的文字表示。

-   `value`: 要轉換成文字的值。此值可以是 `number`、`date`、`time`、`datetime`， `datetimezone`、`logic`、`duration` 或 `binary` 值。如果指定值為 `null`，此函數會傳回 `null`。
-   `culture`: (選用) 將值轉換為文字時所所要使用的文化特性。


## Examples

### Example #1
根據數字 3 建立文字值。
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
取得等同於指定日期和時間的文字。
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
取得等同於指定日期和時間的德文文字。
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
從編碼為十六進位的文字取得二進位值，並將值變更回文字。
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
取得數據表中包含法國數據的數據列，並使用法國文化將日期轉換為文字。
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
