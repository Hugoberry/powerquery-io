---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Muuntaa aikavyöhykeosan UTC-aikavyöhykkeeksi.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Muuttaa datetime-arvon `dateTimeZone` aikavyöhyketiedot UTC-aikavyöhyketiedoiksi. Jos kohteella `dateTimeZone` ei ole aikavyöhykeosaa, UTC-aikavyöhyketiedot lisätään.


## Examples

### Example #1
Muuta kohteen #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) aikavyöhyketiedot UTC-aikavyöhykkeeksi.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
