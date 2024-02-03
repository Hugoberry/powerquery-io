---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Menghasilkan kubus dalam instans Essbase yang dikelompokkan oleh server Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Menghasilkan tabel kubus yang dikelompokkan oleh server Essbase dari instans Essbase pada server AP <code>url</code>. Parameter catatan opsional, <code>options</code>, dapat ditetapkan untuk mengontrol opsi berikut:    <ul><li><code>CommandTimeout</code> : Durasi yang mengontrol berapa lama kueri sisi server diizinkan untuk dijalankan sebelum dibatalkan. Nilai default adalah sepuluh menit.</li></ul>



## Category
Accessing data
