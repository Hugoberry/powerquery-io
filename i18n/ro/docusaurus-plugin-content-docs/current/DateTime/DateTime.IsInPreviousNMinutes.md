---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Indică dacă această valoare datetime cade în numărul de minute anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în minutul curent.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul numărului de minute anterior, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în minutul curent.      <ul>      <li><code>dateTime</code>: o valoare <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      <li><code>minutes</code>: Numărul de minute.</li>      </ul>


## Examples

### Example #1 
Determinați dacă minutul anterior celui indicat de ora curentă a sistemului este în precedentele două minute.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
