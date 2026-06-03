---
title: Date.AddYears
---

# Date.AddYears


將日期加上指定的年數。


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

傳回將 `datetime` 值 `dateTime` 加上 `numberOfYears` 所產生的 `date`、`datetime` 或 `datetimezone`。

-   `dateTime`: 要加上年數的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfYears`: 要加上的年數。


## Examples

### Example #1
將代表 5/14/2011 這個日期的 `date`、`datetime` 或 `datetimezone` 值加 4 年。
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
將代表 5/14/2011 08:15:22 AM 這個日期時間的 `date`、`datetime` 或 `datetimezone` 值加 10 年。
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
