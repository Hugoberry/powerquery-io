---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Laiko juostos komponentas konvertuojamas į vietinę laiko juostą.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Datos ir laiko juostos reikšmės <code>dateTimeZone</code> laiko juostos informacija pakeičiama į vietinės laiko juostos informaciją.    Jei <code>dateTimeZone</code> nėra laiko juostos komponento, įtraukiama vietinės laiko juostos informacija.


## Examples

### Example #1 
Pakeiskite #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) laiko juostos informaciją į vietinę laiko juostą (PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
