---
title: DateTime.ToText
---

# DateTime.ToText


返回日期时间值的文本表示形式。


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

返回 `dateTime` 的文本表示形式。可提供可选的 `record` 参数 `options`，用于指定其他属性。`culture` 仅用于旧版工作流。`record` 可包含以下字段:

-   `Format`: 指示要使用的格式的 `text` 值。要了解更多详细信息，请访问 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 `null` 将导致使用 `Culture` 定义的默认值设置日期格式。
-   `Culture`: 如果 `Format` 不为 null，则 `Culture` 将控制某些格式说明符。例如，在 `"en-US"` 中 `"MMM"` 为 `"Jan", "Feb", "Mar", ...`，而在 `"ru-RU"` 中，`"MMM"` 为 `"янв", "фев", "мар", ...`。当 `Format` 为 `null` 时，`Culture` 会控制要使用的默认格式。当 `Culture` 为 `null` 或省略时，将使用 `Culture.Current`。

要支持旧版工作流，`options` 和 `culture` 也可以是文本值。此行为与 `options = [Format = options, Culture = culture]` 相同。


## Examples

### Example #1
将 `#datetime(2010, 12, 31, 01, 30, 25)` 转换为 `text` 值。*结果输出可能因当前区域性而异。*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
使用自定义格式和德语区域性进行转换。
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
使用 ISO 8601 模式进行转换。
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
