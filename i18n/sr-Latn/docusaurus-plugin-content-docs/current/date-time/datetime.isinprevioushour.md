---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Pokazuje da li se ovaj datum i vreme pojavljuju tokom prethodnog časa, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog časa.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog časa, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog časa.

-   `dateTime`: Vrednost `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Odredite da li je čas pre aktuelnog vremena sistema tokom prethodnog časa.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
