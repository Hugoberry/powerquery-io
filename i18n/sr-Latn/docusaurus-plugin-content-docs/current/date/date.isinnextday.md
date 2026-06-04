---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Pokazuje da li se ovaj datum pojavljuje tokom sledećeg dana, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog dana.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledećeg dana, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog dana.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Utvrđivanje da li je dan nakon trenutnog vremena sistema u sledećem danu.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
