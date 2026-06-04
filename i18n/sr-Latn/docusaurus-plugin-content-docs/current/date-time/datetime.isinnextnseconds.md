---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Pokazuje da li se ovaj datum i vreme pojavljuju tokom sledećeg broja sekundi, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sekunde.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom sledećeg broja sekundi, na osnovu aktuelnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sekunde.

-   `dateTime`: Vrednost `datetime` ili `datetimezone` za procenu.
-   `seconds`: Broj sekundi.


## Examples

### Example #1
Odredite da li je sekunda nakon aktuelnog vremena sistema tokom sledeće dve sekunde.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
