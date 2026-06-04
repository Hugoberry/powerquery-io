---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


Mendapatkan menit zona waktu dari nilai.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

Menghasilkan komponen menit zona waktu dari nilai 'datetimezone'.

-   `dateTimeZone`: Nilai `datetimezone` yang menjadi sumber ekstraksi untuk komponen menit zona waktu. Jika `dateTimeZone` bernilai `null`, fungsi akan mengembalikan `null`.


## Examples

### Example #1
Dapatkan komponen menit zona waktu dari nilai \`datetimezone\` yang ditentukan.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
