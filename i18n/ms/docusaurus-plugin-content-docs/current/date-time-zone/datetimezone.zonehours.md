---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Dapatkan tempoh zon waktu bagi nilai tersebut.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Mengembalikan komponen tempoh zon waktu bagi nilai `datetimezone`.

-   `dateTimeZone`: Nilai `datetimezone` yang komponen tempoh zon waktu diekstrak. Jika `dateTimeZone` ialah `nol`, fungsi akan mengembalikan `nol`.


## Examples

### Example #1
Dapatkan komponen tempoh zon waktu bagi nilai `datetimezone` tertentu.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
