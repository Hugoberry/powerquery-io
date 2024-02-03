---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Повертає дані про кінець тижня.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Повертає дані про кінець тижня, які містить <code>dateTime</code>.Для цієї функції можна вказати додатковий параметр типу <code>Day</code>, <code>firstDayOfWeek</code>, щоб установити перший день тижня для відносного обчислення. Стандартне значення – <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, на основі якого обчислюється останній день тижня.</li>        <li><code>firstDayOfWeek</code> <i>[необов’язковий]</i> – значення <code>Day.Type</code>, яке відповідає першому дню тижня. Можливі значення: <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code>, <code>Day.Saturday.</code>. Стандартне значення – <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Отримання кінця тижня для 14.05.11.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Отримання кінця тижня для 17.05.11, 17:00:00 -7:00 за умови, що першим днем тижня є неділя.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
