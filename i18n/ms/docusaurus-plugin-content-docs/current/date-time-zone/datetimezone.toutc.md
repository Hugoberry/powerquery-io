---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Menukarkan komponen zon waktu kepada zon waktu UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Menukar maklumat zon waktu bagi nilai datetime `dateTimeZone` kepada maklumat zon waktu UTC atau Waktu Universal. Jika `dateTimeZone` tidak mempunyai komponen zon waktu, maklumat zon waktu UTC ditambah.


## Examples

### Example #1
Tukar maklumat zon waktu untuk #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) kepada zon waktu UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
