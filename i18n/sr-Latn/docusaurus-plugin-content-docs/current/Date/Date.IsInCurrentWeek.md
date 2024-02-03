---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Pokazuje da li se ovaj datum pojavljuje tokom aktuelne sedmice, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom aktuelne sedmice, na osnovu trenutnog datuma i vremena sistema.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> koja se procenjuje.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li je trenutno vreme sistema u aktuelnoj sedmici.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
