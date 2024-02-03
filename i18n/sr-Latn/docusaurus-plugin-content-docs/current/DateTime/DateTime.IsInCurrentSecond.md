---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Pokazuje da li se ovi datum i vreme pojavljuju tokom aktuelne sekunde, na osnovu aktuelnog datuma i vremena sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom aktuelne sekunde, na osnovu aktuelnog datuma i vremena sistema.      <ul>      <li><code>dateTime</code>: Vrednost <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      </ul>


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
