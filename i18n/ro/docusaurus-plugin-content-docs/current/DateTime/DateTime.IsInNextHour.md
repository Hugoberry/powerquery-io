---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Indică dacă această valoare datetime cade în timpul orei următoare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ora curentă.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul orei următoare, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în ora curentă.      <ul>      <li><code>dateTime</code>: o valoare <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      </ul>


## Examples

### Example #1 
Determinați dacă ora ulterioară celei indicate de ora curentă a sistemului este în ora următoare.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
