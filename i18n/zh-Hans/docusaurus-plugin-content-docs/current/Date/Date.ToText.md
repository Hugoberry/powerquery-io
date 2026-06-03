---
title: Date.ToText
---

# Date.ToText


返回日期值的文本表示形式。


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

返回 `date` 的文本表示形式。可提供可选的 `record` 参数 `options`，用于指定其他属性。`culture` 仅用于旧版工作流。`record` 可包含以下字段:

-   `Format`: 指示要使用的格式的 `text` 值。要了解更多详细信息，请访问 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 `null` 将导致使用 `Culture` 定义的默认值设置日期格式。
-   `Culture`: 如果 `Format` 不为 null，则 `Culture` 将控制某些格式说明符。例如，在 `"en-US"` 中 `"MMM"` 为 `"Jan", "Feb", "Mar", ...`，而在 `"ru-RU"` 中，`"MMM"` 为 `"янв", "фев", "мар", ...`。当 `Format` 为 `null` 时，`Culture` 会控制要使用的默认格式。当 `Culture` 为 `null` 或省略时，将使用 `Culture.Current`。

要支持旧版工作流，`options` 和 `culture` 也可以是文本值。此行为与 `options = [Format = options, Culture = culture]` 相同。


## Examples

### Example #1
将 `#date(2010, 12, 31)` 转换为`文本`值。*结果输出可能因当前区域性而异。*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
使用自定义格式和德语区域性进行转换。
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
在回历中查找与公历中的 2000 年 1 月 1 日相对应的年份。
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
