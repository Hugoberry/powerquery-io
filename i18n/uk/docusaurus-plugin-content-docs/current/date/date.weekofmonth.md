---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


Повертає число від 1 до 6, що означає тиждень місяця, на який припадає ця дата.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Повертає число від 1 до 6, що означає тиждень місяця, на який припадає дата `dateTime`.

-   `dateTime` – значення `datetime`, для якого визначається тиждень місяця.


## Examples

### Example #1
Визначити, на який тиждень березня припадає 15 число у 2011 р.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
