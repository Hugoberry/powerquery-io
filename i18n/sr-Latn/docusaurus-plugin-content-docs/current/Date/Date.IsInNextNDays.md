---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Pokazuje da li se ovaj datum pojavljuje tokom sledećeg broja dana, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog dana.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom sledećeg broja dana, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog dana.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      <li><code>days</code>: Broj dana.</li>      </ul>


## Examples

### Example #1 
Odredite da li se dan posle trenutnog vremena sistema nalazi u okviru naredna dva dana.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
