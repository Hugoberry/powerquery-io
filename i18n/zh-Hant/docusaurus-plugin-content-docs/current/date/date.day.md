---
title: Date.Day
---

# Date.Day


傳回日元件。


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

傳回 `date`、`datetime` 或 `datetimezone` 值的日元件。

-   `dateTime`: 要從中擷取日元件的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
取得代表 5/14/2011 05:00:00 PM 這個日期時間的 `date`、`datetime` 或 `datetimezone` 值的日元件。
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
