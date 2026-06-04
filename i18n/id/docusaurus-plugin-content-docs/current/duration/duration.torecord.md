---
title: Duration.ToRecord
---

# Duration.ToRecord


Menghasilkan data berisi bagian dari durasi.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Mengembalikan data berisi bagian dari nilai durasi, `duration`.

-   `duration`: `duration` yang digunakan untuk menghasilkan data.


## Examples

### Example #1
Konversikan `#duration(2, 5, 55, 20)` menjadi catatan bagian-bagiannya termasuk hari, jam, menit, dan detik jika berlaku.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
