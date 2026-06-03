---
title: Date.DaysInMonth
---

# Date.DaysInMonth


月の日数を表す 28 ～ 31 の数値を返します。


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

`date`、`datetime`、または `datetimezone` 値 `dateTime` での月の日数を返します。

-   `dateTime`: 月の日数が返される `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
`#date(2011, 12, 01)` によって表される 12 月の日数です。
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
