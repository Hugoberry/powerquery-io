---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Pokazuje da li se ovaj datum pojavljuje tokom sledećeg broja godina, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne godine.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledećeg broja godina, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne godine.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.
-   `years`: Broj godina.


## Examples

### Example #1
Odredite da li se godina posle trenutnog vremena sistema nalazi u okviru naredne dve godine.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
