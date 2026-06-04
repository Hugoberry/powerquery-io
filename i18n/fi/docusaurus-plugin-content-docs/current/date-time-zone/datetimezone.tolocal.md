---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Muuntaa aikavyöhykeosan paikalliseksi aikavyöhykkeeksi.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Muuttaa datetimezone-arvon `dateTimeZone` aikavyöhyketiedot paikallisiksi aikavyöhyketiedoiksi. Jos kohteella `dateTimeZone` ei ole aikavyöhykeosaa, paikalliset aikavyöhyketiedot lisätään.


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
