---
title: Number.From
---

# Number.From


从给定的值创建一个数。


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

从给定的 `value` 返回 `number` 值。还可提供可选的 `culture` (例如 "en-US")。 如果给定的 `value` 是 `null`，`Number.From` 将返回 `null`。如果给定的 `value` 是 `number`，则返回 `value`。以下类型的值可以转换为 `number` 值:

-   `text`: 文本表示形式的 `number` 值。处理通用文本格式("15", "3,423.10", "5.0E-10")。有关详细信息，请参阅 `Number.FromText`。
-   `logical`: 1 表示 `true`，0 表示 `false`。
-   `datetime`: 一个包含等效的 OLE 自动化日期的双精度浮点数。
-   `datetimezone`: 一个包含与 `value` 的当地日期和时间等效的 OLE 自动化日期的双精度浮点数。
-   `date`: 一个包含等效的 OLE 自动化日期的双精度浮点数。
-   `time`: 用天的小数形式表示。
-   `duration`: 用整数天和天的小数形式表示。

如果 `value` 属于任何其他类型，则返回错误。


## Examples

### Example #1
获取 `"4"` 的 `number` 值。
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
获取 `#datetime(2020, 3, 20, 6, 0, 0)` 的 `number` 值。
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
获取 `"12.3%"` 的`数`值。
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
