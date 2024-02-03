---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Vráti číslo (od 0 do 6), ktoré označuje deň v týždni zodpovedajúci zadanej hodnote.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Vráti číslo (od 0 do 6), ktoré označuje deň v týždni zodpovedajúci zadanej hodnote <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>.</li>        <li><code>firstDayOfWeek</code>: hodnota <code>Day</code> označuje, ktorý deň má byť prvým dňom týždňa. Povolené hodnoty sú Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday alebo Day.Saturday. Ak nie je táto hodnota zadaná, použije sa predvolená hodnota závislá od príslušnej jazykovej verzie.</li>      </ul>


## Examples

### Example #1 
Získa deň v týždni reprezentovaný pondelkom 21. februára 2011, pričom sa nedeľa považuje za prvý deň v týždni.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
Získa deň v týždni reprezentovaný pondelkom 21. februára 2011, pričom sa pondelok považuje za prvý deň v týždni.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
