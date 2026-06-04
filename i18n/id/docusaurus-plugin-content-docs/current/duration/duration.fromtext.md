---
title: Duration.FromText
---

# Duration.FromText


Menghasilkan nilai durasi dari format waktu berlalu tekstual (h.j:m:d).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Mengembalikan nilai durasi dari teks yang ditetapkan, `text`. Format berikut dapat diurai dengan fungsi ini:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Semua rentang bersifat inklusif)

-   ddd: Jumlah hari.
-   jam: Jumlah jam, antara 0 dan 23.
-   mm: Jumlah menit, antara 0 dan 59.
-   detik: Jumlah detik, antara 0 dan 59.
-   ff: Pecahan detik, antara 0 dan 9999999.


## Examples

### Example #1
Mengkonversi `"2.05:55:20"` ke nilai `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
