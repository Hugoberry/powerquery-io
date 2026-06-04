---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Pokazuje da li se ovaj datum i vreme pojavljuju tokom sledećeg broja časova, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog časa.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledećeg broja časova, na osnovu aktuelnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog časa.

-   `dateTime`: Vrednost `datetime` ili `datetimezone` za procenu.
-   `hours`: Broj časova.


## Examples

### Example #1
Odredite da li je čas nakon aktuelnog vremena sistema tokom sledeća dva časa.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
