---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Pokazuje da li se ovi datum i vreme pojavljuju tokom aktuelnog minuta, na osnovu aktuelnog datuma i vremena sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Pokazuje da li se data vrednost datuma i vremena `dateTime` pojavljuje tokom aktuelnog minuta, na osnovu aktuelnog datuma i vremena sistema.

-   `dateTime`: Vrednost `datetime` ili `datetimezone` za procenu.


## Examples

### Example #1
Odredite da li je aktuelno vreme sistema u aktuelnom minutu.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
