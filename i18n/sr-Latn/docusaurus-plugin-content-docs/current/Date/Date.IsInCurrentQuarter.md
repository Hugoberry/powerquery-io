---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Pokazuje da li se ovaj datum pojavljuje tokom aktuelnog kvartala, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom aktuelnog kvartala, na osnovu trenutnog datuma i vremena sistema.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> koja se procenjuje.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li je trenutno vreme sistema u aktuelnom kvartalu.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
