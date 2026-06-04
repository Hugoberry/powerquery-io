---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Pokazuje da li se ovaj datum pojavljuje tokom sledećeg broja meseci, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledećeg broja meseci, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.
-   `months`: Broj meseci.


## Examples

### Example #1
Odredite da li se mesec posle trenutnog vremena sistema nalazi u okviru naredna dva meseca.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
