---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


Повертає поточну дату та час у місцевому часовому поясі. Це значення – фіксоване, і воно не зміниться після наступних викликів.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Remarks

Повертає значення `datetime`, встановлене для поточної дати й часу в системі. Це значення – фіксоване, воно не зміниться після наступних викликів на відміну від DateTime.LocalNow, що може повертати різні значення в ході виконання виразу.



## Category
DateTime
