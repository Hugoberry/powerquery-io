---
title: Time.From
---

# Time.From


从给定的值创建时间。


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

从给定的 `value` 返回 `time` 值。还可提供可选的 `culture` (例如 “en-US”)。 如果给定的 `value` 是 `null`，则 `Time.From` 将返回 `null`。如果给定的 `value` 是 `time`，则返回 `value`。以下类型的值可以转换为 `time` 值:

-   `text`: 文本表示形式的 `time` 值。有关详细信息，请参阅 `Time.FromText`。
-   `datetime`: `value` 的时间组件。
-   `datetimezone`: 本地日期时间中等效于 `value` 的时间组件。
-   `number`: 与由 `value` 表示的不完整天数等效的 `time`。如果 `value` 是负数或大于等于 1，则返回错误。

如果 `value` 属于任何其他类型，则返回错误。


## Examples

### Example #1
将 `0.7575` 转换为 `time` 值。
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
将 `#datetime(1899, 12, 30, 06, 45, 12)` 转换为 `time` 值。
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
