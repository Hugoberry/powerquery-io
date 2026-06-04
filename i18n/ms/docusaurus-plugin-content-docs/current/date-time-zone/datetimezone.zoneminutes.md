---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Dapatkan minit zon waktu bagi nilai.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Mengembalikan komponen minit zon waktu bagi nilai 'datetimezone'.

-   `dateTimeZone`: Nilai `datetimezone` yang komponen minit zon waktu diekstrak. Jika `dateTimeZone` ialah `nol`, fungsi akan mengembalikan `nol`.


## Examples

### Example #1
Dapatkan komponen minit zon waktu bagi nilai 'datetimezone' yang ditentukan.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
