---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Pokazuje da li se ovaj datum pojavljuje tokom prethodnog broja meseci, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog broja meseci, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.
-   `months`: Broj meseci.


## Examples

### Example #1
Odredite da li se mesec pre trenutnog vremena sistema nalazi u okviru prethodna dva meseca.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
