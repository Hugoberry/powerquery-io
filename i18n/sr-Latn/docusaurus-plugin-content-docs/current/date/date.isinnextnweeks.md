---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Pokazuje da li se ovaj datum pojavljuje tokom sledećeg broja sedmica, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sedmice.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledećeg broja sedmica, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sedmice.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.
-   `weeks`: Broj sedmica.


## Examples

### Example #1
Odredite da li se sedmica posle trenutnog vremena sistema nalazi u okviru naredne dve sedmice.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
