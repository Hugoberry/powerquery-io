---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


Mendapatkan jam zona waktu dari nilai.


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Menghasilkan komponen jam zona waktu dari nilai `datetimezone`.

-   `dateTimeZone`: Nilai `datetimezone` yang menjadi sumber ekstraksi untuk komponen jam zona waktu. Jika `dateTimeZone` bernilai `null`, fungsi akan mengembalikan `null`.


## Examples

### Example #1
Dapatkan komponen jam zona waktu dari nilai `datetimezone` yang ditentukan.
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
