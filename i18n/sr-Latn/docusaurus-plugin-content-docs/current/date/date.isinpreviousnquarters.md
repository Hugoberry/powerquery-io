---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Pokazuje da li se ovaj datum pojavljuje tokom prethodnog broja kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog broja kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.
-   `quarters`: Broj kvartala.


## Examples

### Example #1
Odredite da li se kvartal pre trenutnog vremena sistema nalazi u okviru prethodna dva kvartala.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
