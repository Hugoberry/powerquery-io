---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Pokazuje da li se ovi datum i vreme pojavljuju tokom aktuelnog časa, na osnovu aktuelnog datuma i vremena sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom aktuelnog časa, na osnovu aktuelnog datuma i vremena sistema.      <ul>      <li><code>dateTime</code>: Vrednost <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      </ul>


## Examples

### Example #1 
Odredite da li je aktuelno vreme sistema u aktuelnom času.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
