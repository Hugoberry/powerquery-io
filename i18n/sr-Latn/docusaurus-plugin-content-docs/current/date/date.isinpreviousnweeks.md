---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Pokazuje da li se ovaj datum pojavljuje tokom prethodnog broja sedmica, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sedmice.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog broja sedmica, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sedmice.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.
-   `weeks`: Broj sedmica.


## Examples

### Example #1
Odredite da li se sedmica pre trenutnog vremena sistema nalazi u okviru prethodne dve sedmice.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
