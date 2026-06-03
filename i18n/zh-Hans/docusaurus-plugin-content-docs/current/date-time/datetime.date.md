---
title: DateTime.Date
---

# DateTime.Date


返回给定 date、datetime 或 datetimezone 值的日期部分。


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

如果参数为 `date`、`datetime` 或 `datetimezone` 值，则返回 `dateTime` 参数的日期组件；如果参数为 `null`，则返回 `null`。


## Examples

### Example #1
查找 #datetime(2010, 12, 31, 11, 56, 02) 的日期值。
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
