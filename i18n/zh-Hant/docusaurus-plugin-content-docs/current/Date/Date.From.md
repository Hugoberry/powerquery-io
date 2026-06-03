---
title: Date.From
---

# Date.From


根據指定的值建立日期。


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

傳回指定值的日期值。

-   `value`: 要轉換為日期的值。如果指定值為 `null`，此函數會傳回 `null`。如果指定值為 `date`，則會傳回 `value`。下列類型的值可以轉換成 `date` 值:
    -   `text`: 來自文字表示法的 `date` 值。如需詳細資料，請參閱 `Date.FromText`。
    -   `datetime`: `value` 的日期元件。
    -   `datetimezone`: `value` 之本機 datetime 同等項目的日期元件。
    -   `number`: 浮點數 datetime 同等項目的日期元件，其整數元件是 1899 年 12 月 30 日午夜之前或之後的天數，其分數元件代表該日的時間除以 24。例如，1899 年 12 月 31 日午夜以 1.0 表示; 1900 年 1 月 1 日上午 6:00 以 2.25 表示; 1899 年 12 月 29 日午夜以 -1.0 表示; 而 1899 年 12 月 29 日上午 6:00 以 -1.25 表示。基礎值為 1899 年 12 月 30 日午夜。最小值為 0100 年 1 月 1 日午夜。最大值是 9999 年 12 月 31 日的最後一刻。
    -   如果 `value` 是其他任何類型，則會傳回錯誤。
-   `culture`: 指定值的文化特性 (例如 "en-US")。


## Examples

### Example #1
將指定的日期和時間轉換為日期值。
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
將指定的數字轉換為日期值。
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
將已張貼日期資料行中的德文文字日期轉換為日期值。
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
