---
title: DateTimeZone.From
---

# DateTimeZone.From


根據指定的值建立 datetimezone。


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

從指定的值建立 `datetimezone`。

-   `value`: 用來建立 `datetimezone` 的值。
-   `culture`: (選用) 轉換值時所要使用的文化特性 (例如 "en-US")。

下列類型的值可以轉換為 `datetimezone` 值:

-   `text`: 從文字表示法傳回 `datetimezone` 值。如需詳細資料，請參閱 `DateTimeZone.FromText`。
-   `date`: 傳回 `datetimezone`，其中 `value` 是日期部分，`12:00:00 AM` 是時間部分，以及對應當地時區的時差。
-   `datetime`: 傳回 `datetimezone`，其中 `value` 是日期時間，以及對應當地時區的時差。
-   `datetimezone`: 傳回 `value`。
-   `time`: 傳回 `datetimezone`，其中等同 OLE 自動化日期 `0` 的日期是日期部分，`value` 是時間部分，以及對應當地時區的時差。OLE 自動化日期包含浮點數，其整數部分是 1899 年 12 月 30 日午夜之前或之後的天數，小數部分代表該日時間除以 24。例如，1899 年 12 月 31 日午夜以 1.0 表示; 1900 年 1 月 1 日上午 6:00 以 2.25 表示; 1899 年 12 月 29 日午夜以 -1.0 表示; 以及 1899 年 12 月 29 日上午 6:00 以 -1.25 表示。基礎值為 1899 年 12 月 30 日午夜。最小值為 0100 年 1 月 1 日午夜。最大值為 9999 年 12 月 31 日的最後一刻。
-   `number`: 傳回 `datetimezone`，其中的日期時間等同於以 `value` 表達的 OLE 自動化日期，以及對應本地時區的時差。
-   `null`: 傳回 `null`。

如果 `value` 是其他任何類型，則會傳回錯誤。  
  
相對於在線上執行此函式，在本機執行時，對應本機時區的時差值會有不同。在本機執行時，會傳回本地時區。在線上執行時，會傳回 UTC 時區 (+00:00)。


## Examples

### Example #1
將日期、時間和時區的文字表示法轉換為 `datetimezone` 值。
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
將巴西葡萄牙文日期、時間和時區的文字表示法轉換為 `datetimezone` 值。
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
將代表 2025 年 1 月 1 日中午 12 點的數字轉換為 `datetimezone` 值。結果中的時區取決於範例是在本機執行還是線上執行。
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
