---
title: Date.IsLeapYear
---

# Date.IsLeapYear


この日付がうるう年に該当するかどうかを示します。


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

指定された datetime 値 `dateTime` がうるう年に該当するかどうかを示します。

-   `dateTime`: 評価される `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
`#date(2012, 01, 01)` によって表されている 2012 年がうるう年かどうかを判断します。
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
