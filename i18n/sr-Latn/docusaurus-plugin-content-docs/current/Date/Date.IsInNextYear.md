---
title: Date.IsInNextYear
---

# Date.IsInNextYear


## Description

Pokazuje da li se ovaj datum pojavljuje tokom sledeće godine, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne godine.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom sledeće godine, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutne godine.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li je godina nakon trenutnog vremena sistema u sledećoj godini.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
