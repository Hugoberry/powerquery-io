---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Pokazuje da li se ovaj datum pojavljuje tokom sledećeg broja sedmica, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sedmice.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom sledećeg broja sedmica, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne sedmice.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      <li><code>weeks</code>: Broj sedmica.</li>      </ul>


## Examples

### Example #1 
Odredite da li se sedmica posle trenutnog vremena sistema nalazi u okviru naredne dve sedmice.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
