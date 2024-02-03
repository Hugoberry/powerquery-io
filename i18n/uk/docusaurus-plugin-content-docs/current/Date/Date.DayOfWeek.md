---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Повертає число (від 0 до 6) на позначення дня тижня, на який припадає надане значення.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Повертає число (від 0 до 6) на позначення дня тижня, на який припадає надане значення <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: значення <code>Day</code>, яке представляє перший день тижня. Дозволені такі значення: Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday, Day.Saturday. Якщо не вказати цей параметр, використовується залежне від культури стандартне значення.</li>      </ul>


## Examples

### Example #1 
Повертає день тижня для понеділка 21 лютого 2011 р. за умови, що перший день тижня – неділя.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Повертає день тижня для понеділка 21 лютого 2011 р. за умови, що перший день тижня – понеділок.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
