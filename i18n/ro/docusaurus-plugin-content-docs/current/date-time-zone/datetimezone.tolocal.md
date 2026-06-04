---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Converteşte componenta timezone la fusul orar local.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Modifică informaţiile despre fusul orar din valoarea datetimezone `dateTimeZone` la informaţii despre fusul orar local. Dacă `dateTimeZone` nu conţine o componentă timezone, sunt adăugate informaţiile despre fusul orar local.


## Examples

### Example #1
Modificaţi informaţiile despre fusul orar pentru #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) la fusul orar local (se presupune că acesta este PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
