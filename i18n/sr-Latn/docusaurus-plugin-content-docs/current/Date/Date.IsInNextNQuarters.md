---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Pokazuje da li se ovaj datum pojavljuje tokom sledećeg broja kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte na umu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom sledećeg broja kvartala, na osnovu trenutnog datuma i vremena sistema. Imajte u vidu da će ova funkcija vratiti false kada se prosledi vrednost koja se pojavljuje u okviru trenutnog kvartala.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> za procenu.</li>      <li><code>quarters</code>: Broj kvartala.</li>      </ul>


## Examples

### Example #1 
Odredite da li se kvartal posle trenutnog vremena sistema nalazi u okviru naredna dva kvartala.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
