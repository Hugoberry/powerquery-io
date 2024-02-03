---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


## Description

Повертає поточну дату та час у місцевому часовому поясі. Це значення – фіксоване, і воно не зміниться після наступних викликів.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Details

Повертає значення <code>datetime</code>, встановлене для поточної дати й часу в системі. Це значення – фіксоване, воно не зміниться після наступних викликів на відміну від DateTime.LocalNow, що може повертати різні значення в ході виконання виразу.



## Category
DateTime
