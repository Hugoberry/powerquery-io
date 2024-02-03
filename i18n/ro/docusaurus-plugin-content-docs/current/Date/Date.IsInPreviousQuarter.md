---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Indică dacă această dată cade în timpul trimestrului anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în trimestrul curent.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul trimestrului anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în trimestrul curent.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinaţi dacă trimestrul anterior orei curente a sistemului este în trimestrul anterior.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
