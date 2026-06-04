---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Pokazuje da li se ovaj datum pojavljuje tokom prethodnog broja godina, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne godine.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog broja godina, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne godine.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.
-   `years`: Broj godina.


## Examples

### Example #1
Odredite da li se godina pre trenutnog vremena sistema nalazi u okviru prethodne dve godine.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
