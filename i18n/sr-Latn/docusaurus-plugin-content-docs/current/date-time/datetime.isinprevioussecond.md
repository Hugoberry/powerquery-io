---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Pokazuje da li se ovaj datum i vreme pojavljuju tokom prethodne sekunde, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sekunde.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodne sekunde, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sekunde.

-   `dateTime`: Vrednost `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Odredite da li je sekunda pre aktuelnog vremena sistema tokom prethodne sekunde.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
