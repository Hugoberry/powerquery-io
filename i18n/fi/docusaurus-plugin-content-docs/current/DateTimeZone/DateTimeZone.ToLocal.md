---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


## Description

Muuntaa aikavyöhykeosan paikalliseksi aikavyöhykkeeksi.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Muuttaa datetimezone-arvon <code>dateTimeZone</code> aikavyöhyketiedot paikallisiksi aikavyöhyketiedoiksi.    Jos kohteella <code>dateTimeZone</code> ei ole aikavyöhykeosaa, paikalliset aikavyöhyketiedot lisätään.


## Examples

### Example #1 
Muuta kohteen #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) aikavyöhyketiedot paikalliseksi aikavyöhykkeeksi (oletus on PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
