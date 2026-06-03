---
title: DateTimeZone.From
---

# DateTimeZone.From


从给定的值创建 datetimezone。


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

根据给定值创建 `datetimezone`。

-   `value`: 用于创建 `datetimezone` 的值。
-   `culture`: (可选)转换值时要使用的区域性(例如，“en-US”)。

以下类型的值可以转换为 `datetimezone` 值:

-   `text`: 从文本表示形式返回 `datetimezone` 值。有关详细信息，请参阅 `DateTimeZone.FromText`。
-   `date`: 返回 `datetimezone`，它以 `value` 作为日期组件，以 `12:00:00 AM` 作为时间组件，偏移量则对应于本地时区。
-   `datetime`: 返回 `datetimezone`，它以 `value` 作为日期/时间，其偏移量对应于本地时区。
-   `datetimezone`: 返回 `value`。
-   `time`: 返回`datetimezone`，其日期组件为等效于 OLE 自动化日期 `0` 的日期，时间组件为 `value`，偏移量则对应于本地时区。OLE 自动化日期由浮点数组成，其整数部分是 1899 年 12 月 30 日午夜之前或之后的天数，其小数部分表示当天的时间除以 24。例如，1899 年 12 月 31 日午夜表示为 1.0；1900 年 1 月 1 日上午 6:00 表示为 2.25；1899 年 12 月 29 日午夜表示为 -1.0；1899 年 12 月 29 日上午 6:00 表示为 -1.25；。基本值为 1899 年 12 月 30 日午夜。最小值为 0100 年 1 月 1 日午夜。最大值为 9999 年 12 月 31 日的最后时刻。
-   `number`: 返回`datetimezone`，其日期/时间等效于由 `value` 表示的 OLE 自动化日期，偏移量则对应于本地时区。
-   `null`: 返回 `null`。

如果 `value` 为任何其他类型，将会返回错误。  
  
与联机运行相比，在本地运行此函数时，与本地时区对应的偏移量值是不同的。在本地运行时，将返回本地时区。联机运行时，将返回 UTC 时区(+00:00)。


## Examples

### Example #1
将日期、时间和时区的文本表示形式转换为 `datetimezone` 值。
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
将巴西葡萄牙语日期、时间和时区的文本表示形式转换为 `datetimezone` 值。
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
将表示 2025 年 1 月 1 日中午 12 点的数字转换为 `datetimezone` 值。结果中的时区取决于示例是本地运行还是联机运行。
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
