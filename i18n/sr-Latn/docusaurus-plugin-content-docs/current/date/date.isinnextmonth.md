---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Pokazuje da li se ovaj datum pojavljuje tokom sledećeg meseca, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledećeg meseca, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Utvrđivanje da li je mesec nakon trenutnog vremena sistema u sledećem mesecu.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
