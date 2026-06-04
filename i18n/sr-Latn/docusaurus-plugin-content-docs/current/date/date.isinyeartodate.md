---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Pokazuje da li se ovaj datum pojavljuje tokom aktuelne godine i da li je na aktuelni dan ili pre njega, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom aktuelne godine i da li je na aktuelni dan ili pre njega, na osnovu trenutnog datuma i vremena sistema.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` koja se procenjuje.


## Examples

### Example #1
Utvrđivanje da li se trenutno vreme sistema nalazi u periodu od početka godine do danas.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
