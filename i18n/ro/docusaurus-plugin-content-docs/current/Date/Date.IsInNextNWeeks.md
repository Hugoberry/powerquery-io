---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Indică dacă această dată cade în următorul număr de săptămâni, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în săptămâna curentă.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul următorului număr de săptămâni, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în săptămâna curentă.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      <li><code>weeks</code>: Numărul de săptămâni.</li>      </ul>


## Examples

### Example #1 
Determină dacă săptămâna ulterioară celei indicate de ora curentă a sistemului cade în următoarele două săptămâni.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
