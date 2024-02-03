---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Pokazuje da li se ovaj datum i vreme pojavljuju tokom sledećeg časa, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog časa.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom sledećeg časa, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog časa.      <ul>      <li><code>dateTime</code>: Vrednost <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      </ul>


## Examples

### Example #1 
Odredite da li je čas nakon aktuelnog vremena sistema tokom sledećeg časa.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
