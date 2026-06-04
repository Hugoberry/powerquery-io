---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Pokazuje da li se ovaj datum pojavljuje tokom prethodnog dana, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog dana.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog dana, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog dana.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Utvrđivanje da li je dan pre trenutnog vremena sistema u prethodnom danu.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
