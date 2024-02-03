---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

Pokazuje da li se ovaj datum i vreme pojavljuju tokom sledećeg broja sekundi, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sekunde.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom sledećeg broja sekundi, na osnovu aktuelnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sekunde.      <ul>      <li><code>dateTime</code>: Vrednost <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      <li><code>seconds</code>: Broj sekundi.</li>      </ul>


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
