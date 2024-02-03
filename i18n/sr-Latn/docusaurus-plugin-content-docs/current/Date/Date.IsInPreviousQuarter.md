---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Pokazuje da li se ovaj datum pojavljuje tokom prethodnog kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom prethodnog kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li je kvartal pre trenutnog vremena sistema u prethodnom kvartalu.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
