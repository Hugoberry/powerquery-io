---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Vráti koniec týždňa.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Vráti posledný deň v týždni, ktorý obsahuje hodnotu <code>dateTime</code>.    Táto funkcia použije voliteľnú hodnotu <code>Day</code>, <code>firstDayOfWeek</code>, ktorá sa pre tento relatívny výpočet nastaví ako prvý deň v týždni. Predvolená hodnota je <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, z ktorej sa vypočíta posledný deň v týždni.</li>        <li><code>firstDayOfWeek</code>: <i>[Voliteľné]</i> Hodnota <code>Day.Type</code> predstavujúca prvý deň v týždni. Možné hodnoty sú <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> a <code>Day.Saturday.</code>. Predvolená hodnota je <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Získajte koniec týždňa pre dátum 14. 5. 2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Získajte koniec týždňa pre dátum 17. 5. 2011 a čas 17:00:00 – 7:00, pričom nedeľa je prvým dňom v týždni.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
