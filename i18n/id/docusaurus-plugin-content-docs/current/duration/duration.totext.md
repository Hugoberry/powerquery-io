---
title: Duration.ToText
---

# Duration.ToText


Menghasilkan teks dari format "h.j:m:d".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Menghasilkan representasi tekstual dalam format "day.hour:mins:sec" dari nilai durasi yang diberikan, `duration`.

-   `duration`: Sebuah `duration` yang digunakan untuk menghitung representasi tekstual.
-   `format`: *(Opsional)* Ditolak, akan menimbulkan kesalahan jika tidak null.


## Examples

### Example #1
Mengkonversi `#duration(2, 5, 55, 20)` ke nilai teks.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
