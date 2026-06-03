---
title: Date.IsLeapYear
---

# Date.IsLeapYear


指出這個日期是否在閏年中。


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

指出指定的 datetime 值 `dateTime` 是否在閏年中。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷 `#date(2012, 01, 01)` 所代表的 2012 年是否為閏年。
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
