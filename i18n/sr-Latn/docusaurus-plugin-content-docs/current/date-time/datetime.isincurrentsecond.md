---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Pokazuje da li se ovi datum i vreme pojavljuju tokom aktuelne sekunde, na osnovu aktuelnog datuma i vremena sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom aktuelne sekunde, na osnovu aktuelnog datuma i vremena sistema.

-   `dateTime`: Vrednost `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Odredite da li je aktuelno vreme sistema u aktuelnoj sekundi.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
