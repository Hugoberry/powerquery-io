---
title: Date.FromText
---

# Date.FromText


根据本地、通用和自定义日期格式创建日期。


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

根据文本表示形式创建日期值。

-   `text`: 要转换为日期的文本值。
-   `options`: 可提供的可选 `record`，用于指定其他属性。`record` 可包含以下字段:
    -   `Format`: 指示要使用的格式的 `text` 值。有关更多详细信息，请转到 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 `null` 则会尝试以尽可能合理的方式分析日期。
    -   `Culture`: 当`Format` 不为 null 时，`Culture` 将会控制一些格式说明符。例如，在 `"en-US"` 中 `"MMM"` 为 `"Jan", "Feb", "Mar", ...`，而在 `"ru-RU"` 中，`"MMM"` 为 `"янв", "фев", "мар", ...`。当 `Format` 为 `null` 时，`Culture` 会控制要使用的默认格式。当 `Culture` 为 `null` 或省略时，将使用 `Culture.Current`。

要支持旧式工作流，`options` 也可以是文本值。这与 `options = [Format = null, Culture = options]` 时的行为相同。


## Examples

### Example #1
将 `"2010-12-31"` 转换为 `date` 值。
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
使用自定义格式和德语区域性进行转换。
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
在公历中查找与回历中 1400 开头相对应的日期。
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
将“发布日期”列中包含月份缩写的意大利语文本日期转换为日期值。
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
