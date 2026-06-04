---
title: Date.AddQuarters
---

# Date.AddQuarters


將日期加上指定的季數。


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

傳回將 `datetime` 值 `dateTime` 加上 `numberOfQuarters` 季後所產生的 `date`、`datetime` 或 `datetimezone`。

-   `dateTime`: 要加上季數的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfQuarters`: 要加上的季數。


## Examples

### Example #1
將代表 5/14/2011 這個日期的 `date`、`datetime` 或 `datetimezone` 值加 1 季。
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
