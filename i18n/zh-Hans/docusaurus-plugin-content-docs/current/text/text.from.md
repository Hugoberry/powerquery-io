---
title: Text.From
---

# Text.From


从给定的值创建文本值。


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

返回指定值的文本表示形式。

-   `value`: 要转换为文本的值。该值可以是 `number`、`date`、`time`、`datetime`、`datetimezone`、`logical`、`duration` 或 `binary` 值。如果给定的值为 `null`，则此函数将返回 `null`。
-   `culture`: (可选)将值转换为文本时要使用的区域性(例如 "en-US")。


## Examples

### Example #1
从数字 3 创建一个文本值。
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
获取与指定日期和时间等效的文本。
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
获取与指定日期和时间等效的德语文本。
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
从编码为十六进制的文本中获取二进制值，并将该值更改回文本。
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
获取表中包含法国数据的行，并使用法语区域性将日期转换为文本。
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
