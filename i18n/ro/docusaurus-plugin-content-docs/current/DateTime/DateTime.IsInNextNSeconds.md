---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

Indică dacă această valoare datetime cade în următorul număr de secunde, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în secunda curentă.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Indică dacă valoarea datetime dată <code>dateTime</code> cade în timpul următorului număr de secunde, după cum este determinat de data și ora curente ale sistemului. Rețineți că această funcție va returna false atunci când primește o valoare care cade în secunda curentă.      <ul>      <li><code>dateTime</code>: o valoare <code>datetime</code> sau <code>datetimezone</code> de evaluat.</li>      <li><code>seconds</code>: Numărul de secunde.</li>      </ul>


## Examples

### Example #1 
Determină dacă secunda ulterioară celei indicate de ora curentă a sistemului este în următoarele două secunde.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
