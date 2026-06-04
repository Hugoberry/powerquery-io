---
title: Time.FromText
---

# Time.FromText


根据本地和通用以及自定义时间格式创建时间。


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

根据文本表示形式 `text` 创建 `time` 值。可以提供可选的 `record` 参数 `options` 来指定其他属性。`record` 可包含以下字段:

-   `Format`: 指示要使用的格式的 `text` 值。要了解更多详细信息，请转到 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 `null` 将导致尽最大努力解析时间。
-   `Culture`: 如果 `Format` 不为 null，则 `Culture` 将控制某些格式说明符。例如，在 `"en-US"` 中，`"tt"` 是 `"AM" 或 "PM"`，而在 `"ar-EG"` 中，`"tt"` 是 `"ص" 或 "م"`。当 `Format` 为 `null` 时，`Culture` 会控制要使用的默认格式。当 `Culture` 为 `null` 或省略时，将使用 `Culture.Current`。

要支持旧版工作流，`options` 也可以是文本值。这与 `options = [Format = null, Culture = options]` 时的行为相同。


## Examples

### Example #1
将 `"10:12:31am"` 转换为时间值。
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
将 `"1012"` 转换为 Time 值。
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
将 `"10"` 转换为 Time 值。
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
