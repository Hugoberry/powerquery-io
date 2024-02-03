---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Pārveido laika joslas komponentu uz vietējo laika joslu.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Vērtībai datetimezone <code>dateTimeZone</code> maina informāciju par laika joslu uz vietējās laika joslas informāciju.    Ja vērtībai <code>dateTimeZone</code> nav laika joslas komponenta, tiek pievienota informācija par vietējo laika joslu.


## Examples

### Example #1 
Mainīt informāciju par laika joslu vērtībai #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) uz vietējo laika joslu (pieņemot PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
