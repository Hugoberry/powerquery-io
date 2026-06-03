---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


根据本地、通用和自定义 datetimezone 格式创建 datetimezone。


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

根据文本表示形式 `text` 创建 `datetimezone` 值。可以提供可选的 `record` 参数 `options` 来指定其他属性。`record` 可包含以下字段:

-   `Format`: 指示要使用的格式的 `text` 值。要了解更多详细信息，请转到 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 `null` 将尽力分析日期。
-   `Culture`: 如果 `Format` 不为 null，则 `Culture` 将控制某些格式说明符。例如，在 `"en-US"` 中 `"MMM"` 为 `"Jan", "Feb", "Mar", ...`，而在 `"ru-RU"` 中，`"MMM"` 为 `"янв", "фев", "мар", ...`。当 `Format` 为 `null` 时，`Culture` 会控制要使用的默认格式。当 `Culture` 为 `null` 或省略时，将使用 `Culture.Current`。

要支持旧版工作流，`options` 也可以是文本值。这与 `options = [Format = null, Culture = options]` 时的行为相同。


## Examples

### Example #1
将 `"2010-12-31T01:30:00-08:00"` 转换为 `datetimezone` 值。
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
使用自定义格式和德语区域性进行转换。
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
使用 ISO 8601 进行转换。
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
