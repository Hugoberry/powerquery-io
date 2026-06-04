---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Converteşte componenta timezone la fusul orar UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Modifică informaţiile despre fusul orar din valoarea datetime `dateTimeZone` la informaţii despre fusul orar UTC sau Timp universal. Dacă `dateTimeZone` nu conţine o componentă timezone, sunt adăugate informaţiile despre fusul orar UTC.


## Examples

### Example #1
Modificaţi informaţiile despre fusul orar pentru #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) la fusul orar UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
