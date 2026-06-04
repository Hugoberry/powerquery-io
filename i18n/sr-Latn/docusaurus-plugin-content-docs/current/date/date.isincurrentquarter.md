---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Pokazuje da li se ovaj datum pojavljuje tokom aktuelnog kvartala, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom aktuelnog kvartala, na osnovu trenutnog datuma i vremena sistema.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` koja se procenjuje.


## Examples

### Example #1
Utvrđivanje da li je trenutno vreme sistema u aktuelnom kvartalu.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
