---
title: Date.From
---

# Date.From


从给定的值创建日期。


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

返回给定值的日期值。

-   `value`: 要转换为日期的值。如果给定的值为 `null`，则此函数将返回 `null`。如果给定的值为 `date`，则返回 `value`。以下类型的值可以转换为 `date` 值:
    -   `text`: 来自文本表示形式的 `date` 值。有关详细信息，请参阅 `Date.FromText`。
    -   `datetime`: `value` 的日期组件。
    -   `datetimezone`: `value` 的本地日期/时间等效项的日期组件。
    -   `number`: 浮点数日期时间等效项的日期组件，其整数部分是 1899 年 12 月 30 日午夜之前或之后的天数，其小数部分表示当天的时间除以 24。例如，1899 年 12 月 31 日午夜表示为 1.0；1900 年 1 月 1 日上午 6:00 表示为 2.25；1899 年 12 月 29 日午夜表示为 -1.0；1899 年 12 月 29 日上午 6:00 表示为 -1.25；。基本值为 1899 年 12 月 30 日午夜。最小值为 0100 年 1 月 1 日午夜。最大值为 9999 年 12 月 31 日的最后时刻。
    -   如果 `value` 为任何其他类型，将会返回错误。
-   `culture`: 给定值的区域性(例如 "en-US")。


## Examples

### Example #1
将指定的日期和时间转换为日期值。
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
将指定的数字转换为日期值。
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
将“发布日期”列中的德语文本日期转换为日期值。
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
