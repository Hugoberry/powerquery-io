---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Pokazuje da li se ovaj datum pojavljuje tokom sledeće godine, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne godine.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledeće godine, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne godine.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Utvrđivanje da li je godina nakon trenutnog vremena sistema u sledećoj godini.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
