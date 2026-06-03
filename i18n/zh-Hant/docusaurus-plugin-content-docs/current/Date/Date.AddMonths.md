---
title: Date.AddMonths
---

# Date.AddMonths


將日期加上指定的月數。


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

傳回將 `datetime` 值 `dateTime` 加上 `numberOfMonths` 個月後所產生的 `date`、`datetime` 或 `datetimezone`。

-   `dateTime`: 要加上月數的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfMonths`: 要加上的月數。


## Examples

### Example #1
將代表 5/14/2011 這個日期的 `date`、`datetime` 或 `datetimezone` 值加 5 個月。
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
將代表 5/14/2011 08:15:22 AM 這個日期時間的 `date`、`datetime` 或 `datetimezone` 值加 18 個月。
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
