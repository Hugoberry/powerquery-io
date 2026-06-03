---
title: DateTime.FromText
---

# DateTime.FromText


从本地和通用日期时间格式创建 datetimezone。


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

根据文本表示形式 `text` 创建 `datetime` 值。可以提供可选的 `record` 参数 `options` 来指定其他属性。`record` 可包含以下字段:

-   `Format`: 指示要使用的格式的 `text` 值。要了解更多详细信息，请转到 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 `null` 将尽力分析日期。
-   `Culture`: 如果 `Format` 不为 null，则 `Culture` 将控制某些格式说明符。例如，在 `"en-US"` 中 `"MMM"` 为 `"Jan", "Feb", "Mar", ...`，而在 `"ru-RU"` 中，`"MMM"` 为 `"янв", "фев", "мар", ...`。当 `Format` 为 `null` 时，`Culture` 会控制要使用的默认格式。当 `Culture` 为 `null` 或省略时，将使用 `Culture.Current`。

要支持旧版工作流，`options` 也可以是文本值。这与 `options = [Format = null, Culture = options]` 时的行为相同。


## Examples

### Example #1
将 `"2010-12-31T01:30:00"` 转换为 datetime 值。
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
将 `"2010-12-31T01:30:00.121212"` 转换为 datetime 值。
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
将 `"2010-12-31T01:30:00"` 转换为 datetime 值。
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
将 `"20101231T013000"` 转换为 datetime 值。
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
