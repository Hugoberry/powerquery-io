---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Pokazuje da li se ovaj datum pojavljuje tokom aktuelne godine, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom aktuelne godine, na osnovu trenutnog datuma i vremena sistema.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` koja se procenjuje.


## Examples

### Example #1
Utvrđivanje da li je trenutno vreme sistema u aktuelnoj godini.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
