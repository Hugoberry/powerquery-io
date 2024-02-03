---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Повертає число від 1 до 6, що означає тиждень місяця, на який припадає ця дата.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Повертає число від 1 до 6, що означає тиждень місяця, на який припадає дата <code>dateTime</code>. <ul>        <li><code>dateTime</code> – значення <code>datetime</code>, для якого визначається тиждень місяця.</li>      </ul>


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
