---
title: Date.AddDays
---

# Date.AddDays


將日期加上指定的天數。


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

傳回將 `datetime` 值 `dateTime` 加上 `numberOfDays` 天後所產生的 `date`、`datetime` 或 `datetimezone`。

-   `dateTime`: 要加上天數的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfDays`: 要加上的天數。


## Examples

### Example #1
將代表 5/14/2011 這個日期的 `date`、`datetime` 或 `datetimezone` 值加 5 天。
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
