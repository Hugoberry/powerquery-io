---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Pokazuje da li se ovaj datum i vreme pojavljuju tokom prethodnog broja minuta, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog minuta.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom prethodnog broja minuta, na osnovu aktuelnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog minuta.      <ul>      <li><code>dateTime</code>: Vrednost <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      <li><code>minutes</code>: Broj minuta.</li>      </ul>


## Examples

### Example #1 
Odredite da li je minut pre aktuelnog vremena sistema tokom prethodna dva minuta.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
