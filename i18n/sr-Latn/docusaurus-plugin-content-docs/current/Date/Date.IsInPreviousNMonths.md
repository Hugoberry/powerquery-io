---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Pokazuje da li se ovaj datum pojavljuje tokom prethodnog broja meseci, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom prethodnog broja meseci, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog meseca.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      <li><code>months</code>: Broj meseci.</li>      </ul>


## Examples

### Example #1 
Odredite da li se mesec pre trenutnog vremena sistema nalazi u okviru prethodna dva meseca.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
