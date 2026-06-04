---
title: Duration.From
---

# Duration.From


从给定的值创建持续时间。


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

返回给定值的持续时间值。

-   `value`: 从中派生出持续时间的值。如果给定的 `value` 为 `null`，则此函数将返回 `null`。如果给定的 `value` 是 `duration`，则将返回 `value`。以下类型的值可转换为 `duration` 值:
    -   `text`: 来自文本已用时间根式(d.h:m:s)的 `duration` 值。有关详细信息，请参阅 `Duration.FromText`。
    -   `number`: `duration` 相当于由 `value` 表示的包含整数和小数的天数。

如果 `value` 为任何其他类型，将会返回错误。


## Examples

### Example #1
将 `2.525` 转换为 `duration` 值。
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
将文本值 `"2.05:55:20.34567"` 转换为“`持续时长`”值。
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
