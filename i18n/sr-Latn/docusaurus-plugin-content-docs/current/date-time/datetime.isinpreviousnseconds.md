---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Pokazuje da li se ovaj datum i vreme pojavljuju tokom prethodnog broja sekundi, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sekunde.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom prethodnog broja sekundi, na osnovu aktuelnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sekunde.

-   `dateTime`: Vrednost `datetime` ili `datetimezone` za procenu.
-   `seconds`: Broj sekundi.


## Examples

### Example #1
Odredite da li je sekunda pre aktuelnog vremena sistema tokom prethodne dve sekunde.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
