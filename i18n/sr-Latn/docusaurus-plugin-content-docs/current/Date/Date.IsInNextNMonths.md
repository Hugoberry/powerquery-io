---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Pokazuje da li se ovaj datum pojavljuje tokom sledećeg broja meseci, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom sledećeg broja meseci, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      <li><code>months</code>: Broj meseci.</li>      </ul>


## Examples

### Example #1 
Odredite da li se mesec posle trenutnog vremena sistema nalazi u okviru naredna dva meseca.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
