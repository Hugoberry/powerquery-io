---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Pokazuje da li se ovaj datum pojavljuje tokom sledećeg broja kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledećeg broja kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` za procenu.
-   `quarters`: Broj kvartala.


## Examples

### Example #1
Odredite da li se kvartal posle trenutnog vremena sistema nalazi u okviru naredna dva kvartala.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
