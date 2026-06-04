---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Menukarkan komponen zon waktu kepada zon waktu tempatan.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Menukar maklumat zon waktu bagi nilai datetimezone `dateTimeZone` kepada maklumat zon waktu tempatan. Jika `dateTimeZone` tidak mempunyai komponen zon waktu, maklumat zon waktu tempatan ditambah.


## Examples

### Example #1
Tukar maklumat zon waktu untuk #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) kepada zon waktu tempatan (menganggap PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
