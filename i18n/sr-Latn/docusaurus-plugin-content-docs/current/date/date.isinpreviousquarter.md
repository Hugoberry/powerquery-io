---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Pokazuje da li se ovaj datum pojavljuje tokom prethodnog kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Utvrđivanje da li je kvartal pre trenutnog vremena sistema u prethodnom kvartalu.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
