---
title: Date.AddWeeks
---

# Date.AddWeeks


將日期加上指定的週數。


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

傳回將 `datetime` 值 `dateTime` 加上 `numberOfWeeks` 週後所產生的 `date`、`datetime` 或 `datetimezone`。

-   `dateTime`: 要加上週數的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfWeeks`: 要加上的週數。


## Examples

### Example #1
將代表 5/14/2011 這個日期的 `date`、`datetime` 或 `datetimezone` 值加 2 週。
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
