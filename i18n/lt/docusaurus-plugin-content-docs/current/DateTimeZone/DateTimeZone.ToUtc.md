---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Laiko juostos komponentas konvertuojamas į UTC laiko juostą.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Datos ir laiko reikšmės <code>dateTimeZone</code> laiko juostos informacija pakeičiama į UTC arba universaliojo laiko juostos informaciją.   Jei <code>dateTimeZone</code> nėra laiko juostos komponento, įtraukiama UTC laiko juostos informacija.


## Examples

### Example #1 
Pakeiskite #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) laiko juostos informaciją į UTC laiko juostą.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
