---
title: Time.ToRecord
---

# Time.ToRecord


Menghasilkan data berisi bagian nilai Waktu.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Mengembalikan data berisi bagian nilai Waktu tertentu, `time`.

-   `time`: Nilai `time` yang data pada bagiannya akan dihitung.


## Examples

### Example #1
Mengkonversi nilai `#time(11, 56, 2)` ke data berisi nilai Waktu.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
