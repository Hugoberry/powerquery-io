---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Повертає поточну дату та час у місцевому часовому поясі. Це значення – фіксоване, і воно не зміниться після наступних викликів.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Повертає значення <code>datetime</code>, встановлене для поточної дати й часу в системі. Повернуте значення містить інформацію про місцевий часовий пояс. Це значення – фіксоване, воно не зміниться після наступних викликів на відміну від DateTimeZone.LocalNow, що може повертати різні значення в ході виконання виразу.



## Category
DateTimeZone
