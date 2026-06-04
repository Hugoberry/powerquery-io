---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Берілген мәннің апта күнін көрсететін санды (0 мен 6 арасындағы) қайтарады.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Берілген `dateTime` апта күнін көрсететін санды (0 мен 6 арасындағы) қайтарады.

-   `dateTime`: `Date`, `datetime` немесе `datetimezone` мәні.
-   `firstDayOfWeek`: Аптаның бірінші күнін көрсететін `Day` мәні. Рұқсат етілген мәндер: Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday немесе Day.Saturday. Егер көрсетілмесе, тіл және аймақтық параметрлерге сәйкес әдепкі мән пайдаланылады.


## Examples

### Example #1
Жексенбіні аптаның бірінші күні ретінде қарастырып, 2011 жылдың 21 ақпаны арқылы көрсетілген апта күнін алыңыз.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Дүйсенбіні аптаның бірінші күні ретінде қарастырып, 2011 жылдың 21 ақпаны арқылы көрсетілген апта күнін алыңыз.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
