---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Pokazuje da li se ovaj datum pojavljuje tokom aktuelnog dana, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom aktuelnog dana, na osnovu trenutnog datuma i vremena sistema.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` koja se procenjuje.


## Examples

### Example #1
Utvrđivanje da li je trenutno vreme sistema u aktuelnom danu.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
