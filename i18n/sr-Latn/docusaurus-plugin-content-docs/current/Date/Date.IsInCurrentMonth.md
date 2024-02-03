---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Pokazuje da li se ovaj datum pojavljuje tokom aktuelnog meseca, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom aktuelnog meseca, na osnovu trenutnog datuma i vremena sistema.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> koja se procenjuje.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li je trenutno vreme sistema u aktuelnom mesecu.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
