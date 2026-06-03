---
title: Date.FromText
---

# Date.FromText


根據本地、國際和自訂日期格式建立日期。


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

從文字表示法建立日期值。

-   `text`: 要轉換為日期的文字值。
-   `options`: 選用的 `record`，可提供用來指定其他屬性。`record` 可以包含下列欄位:
    -   `Format`: `text` 值，指出要使用的格式。如需更多詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 `null` 會盡力以最佳方式剖析日期。
    -   `Culture`: 當 `Format` 不是 null，`Culture` 會控制某些格式規範。例如，`"en-US"` 的 `"MMM"` 為 `"Jan", "Feb", "Mar", ...`，而 `"ru-RU"` 的 `"MMM"` 為 `"янв", "фев", "мар", ...`。當 `Format` 為 `null`，`Culture` 會控制要使用的預設格式。當 `Culture` 為 `null` 或省略，則會使用 `Culture.Current`。

若要支援舊版工作流程，`options` 也可以是文字值。這與 `options = [Format = null, Culture = options]` 具有相同的行爲。


## Examples

### Example #1
將 `"2010-12-31"` 轉換成 `date` 值。
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
使用自訂格式和德文文化特性進行轉換。
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
在西曆中尋找對應於回曆 1400 年初的日期。
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
將已張貼日期資料行中具有縮寫月份的義大利文文字日期轉換為日期值。
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
