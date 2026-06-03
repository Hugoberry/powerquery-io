---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


この日付が月のどの週に該当するかを示す、1 ～ 6 の数値を返します。


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

日付 `dateTime` が月のどの週に該当するかを示す、1 から 6 の数値を返します。

-   `dateTime`: 月内の週が特定される `datetime` 値。


## Examples

### Example #1
2011 年では、3 月 15 日がどの週に該当するかを特定します。
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
