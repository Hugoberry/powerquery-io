---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Повертає дані про кінець кварталу.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Повертає дані про кінець кварталу, які містить <code>dateTime</code>. Відомості часового поясу зберігаються.      <ul>      <li><code>dateTime</code> – значення типу <code>date</code>, <code>datetime</code> або <code>datetimezone</code>, на основі якого обчислюється кінець кварталу.</li>      </ul>


## Examples

### Example #1 
Виявити кінець кварталу для 10 жовтня 2011 р., 08:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
