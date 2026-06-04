---
title: Essbase.Cubes
---

# Essbase.Cubes


Menghasilkan kubus dalam instans Essbase yang dikelompokkan oleh server Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Menghasilkan tabel kubus yang dikelompokkan oleh server Essbase dari instans Essbase pada server AP `url`. Parameter catatan opsional, `options`, dapat ditetapkan untuk mengontrol opsi berikut:

-   `CommandTimeout` : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.



## Category
Accessing data
