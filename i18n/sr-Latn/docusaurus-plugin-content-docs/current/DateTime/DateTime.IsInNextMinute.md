---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Pokazuje da li se ovaj datum i vreme pojavljuju tokom sledećeg minuta, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog minuta.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom sledećeg minuta, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog minuta.      <ul>      <li><code>dateTime</code>: Vrednost <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      </ul>


## Examples

### Example #1 
Odredite da li je minut nakon aktuelnog vremena sistema tokom sledećeg minuta.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
