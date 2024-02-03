---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Pokazuje da li se ovaj datum pojavljuje tokom aktuelnog dana, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom aktuelnog dana, na osnovu trenutnog datuma i vremena sistema.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> koja se procenjuje.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li je trenutno vreme sistema u aktuelnom danu.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
