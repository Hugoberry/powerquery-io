---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Pokazuje da li se ovaj datum pojavljuje tokom aktuelne godine, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom aktuelne godine, na osnovu trenutnog datuma i vremena sistema.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> koja se procenjuje.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li je trenutno vreme sistema u aktuelnoj godini.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
