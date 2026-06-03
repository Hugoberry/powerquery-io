---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


傳回 1 到 6 的數字，指出這個日期落在一個月的哪一週。


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

傳回 1 到 6 的數字，指出 `dateTime` 這個日期落在一個月的哪一週。

-   `dateTime`: 用來判斷當月哪一週的 `datetime` 值。


## Examples

### Example #1
判斷 3 月 15 日落在 2011 年的哪一週。
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
