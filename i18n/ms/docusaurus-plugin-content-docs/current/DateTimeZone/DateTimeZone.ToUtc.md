---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

Menukarkan komponen zon waktu kepada zon waktu UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

Menukar maklumat zon waktu bagi nilai datetime <code>dateTimeZone</code> kepada maklumat zon waktu UTC atau Waktu Universal.    Jika <code>dateTimeZone</code> tidak mempunyai komponen zon waktu, maklumat zon waktu UTC ditambah.


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
