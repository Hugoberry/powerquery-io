---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Pokazuje da li se ovaj datum i vreme pojavljuju tokom prethodnog minuta, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog minuta.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog minuta, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog minuta.

-   `dateTime`: Vrednost `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Odredite da li je minut pre aktuelnog vremena sistema tokom prethodnog minuta.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
