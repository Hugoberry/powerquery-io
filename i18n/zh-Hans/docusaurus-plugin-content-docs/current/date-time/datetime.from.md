---
title: DateTime.From
---

# DateTime.From


从给定的值创建日期时间。


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

从给定的 `value` 返回 `datetime` 值。还可提供可选的 `culture` (例如 "en-US")。 如果给定的 `value` 是 `null`，`DateTime.From` 将返回 `null`。如果给定的 `value` 是 `datetime`，则返回 `value`。以下类型的值可以转换为 `datetime` 值:

-   `text`: 文本表示形式的 `datetime` 值。有关详细信息，请参阅 `DateTime.FromText`。
-   `date`: 一个 `datetime`，它以 `value` 作为日期组件以及`午夜 12:00:00` 作为时间组件。
-   `datetimezone`: 等效于 `value` 的本地 `datetime`。
-   `time`: `datetime`，它具有作为日期组件的 `0` 的 OLE 自动化日期的等效日期以及作为时间组件的 `value`。
-   `number`: 一个 `datetime`，它等效于由 `value` 表示的 OLE 自动化日期。

如果 `value` 属于任何其他类型，则返回错误。


## Examples

### Example #1
将 `#time(06, 45, 12)` 转换为 `datetime` 值。
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
将 `#date(1975, 4, 4)` 转换为 `datetime` 值。
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
