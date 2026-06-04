---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Pokazuje da li se ovaj datum pojavljuje tokom aktuelnog meseca, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom aktuelnog meseca, na osnovu trenutnog datuma i vremena sistema.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` koja se procenjuje.


## Examples

### Example #1
Utvrđivanje da li je trenutno vreme sistema u aktuelnom mesecu.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
