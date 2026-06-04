---
title: Date.ToRecord
---

# Date.ToRecord


Menghasilkan data berisi bagian dari nilai tanggal.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Mengembalikan data berisi bagian dari nilai tanggal tertentu, `date`.

-   `date`: Nilai `date` yang data pada bagiannya akan dihitung.


## Examples

### Example #1
Mengkonversi nilai `#date(2011, 12, 31)` ke data berisi bagian dari nilai tanggal.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
