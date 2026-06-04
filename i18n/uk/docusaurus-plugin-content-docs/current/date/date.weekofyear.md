---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Повертає число від 1 до 54, яке вказує, на який тиждень року припадає ця дата.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Повертає число від 1 до 54, що вказує тиждень року, на який припадає певна дата (`dateTime`).

-   `dateTime`: значення типу `datetime`, для якого визначається тиждень року.
-   `firstDayOfWeek`: необов’язкове значення типу `Day.Type`, яке визначає перший день нового тижня (наприклад, `Day.Sunday`). Якщо не вказати це значення, використовується стандартний для культури варіант.


## Examples

### Example #1
Визначити, на який тиждень року припадає 27 березня 2011 р.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Визначити, на який тиждень року припадає 27 березня 2011 р., якщо новий тиждень починається з понеділка.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
