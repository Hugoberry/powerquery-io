---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Повертає число від 1 до 54, яке вказує, на який тиждень року припадає ця дата.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Повертає число від 1 до 54, що вказує тиждень року, на який припадає певна дата (<code>dateTime</code>). <ul>        <li><code>dateTime</code>: значення типу <code>datetime</code>, для якого визначається тиждень року.</li>        <li><code>firstDayOfWeek</code>: необов’язкове значення типу <code>Day.Type</code>, яке визначає перший день нового тижня (наприклад, <code>Day.Sunday</code>). Якщо не вказати це значення, використовується стандартний для культури варіант.</li>      </ul>


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
