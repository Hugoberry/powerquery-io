---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Menghasilkan data berisi bagian nilai datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Mengembalikan data berisi bagian dari nilai datetime tertentu, `dateTime`.

-   `dateTime`: Nilai `datetime` yang data pada bagiannya akan dihitung.


## Examples

### Example #1
Mengkonversi nilai `#datetime(2011, 12, 31, 11, 56, 2)` ke data berisi nilai Tanggal dan Waktu.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
