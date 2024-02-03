---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Pokazuje da li se ovaj datum pojavljuje tokom aktuelne godine i da li je na aktuelni dan ili pre njega, na osnovu trenutnog datuma i vremena sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Pokazuje da li se data vrednost datuma i vremena <code>dateTime</code> pojavljuje tokom aktuelne godine i da li je na aktuelni dan ili pre njega, na osnovu trenutnog datuma i vremena sistema.      <ul>      <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> koja se procenjuje.</li>      </ul>


## Examples

### Example #1 
Utvrđivanje da li se trenutno vreme sistema nalazi u periodu od početka godine do danas.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
