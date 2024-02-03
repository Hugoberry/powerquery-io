---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Import/DirectQuery data kiub daripada AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Mengembalikan data kiub daripada AtScale pada pelayan <code>pelayan</code>. Parameter rekod pilihan, <code>opsyen</code>, boleh ditentukan untuk mengawal opsyen berikut:<ul>        <li><code>TypedMeasureColumns</code>: Nilai logik yang menunjukkan sama ada jenis yang ditentukan dalam model berbilang dimensi atau berjadual akan digunakan untuk jenis lajur ukuran yang ditambah. Apabila ditetapkan kepada palsu, jenis "nombor" akan digunakan untuk semua lajur ukuran. Nilai lalai untuk opsyen ini ialah palsu.</li>        <li><code>CommandTimeout</code>: Tempoh (dalam saat) yang mengawal tempoh pertanyaan pihak pelayan dibenarkan untuk dijalankan sebelum dibatalkan. Nilai lalai bergantung pada pemacu. </li>        <li><code>ConnectionTimeout</code>: Tempoh (dalam saat) yang mengawal tempoh menunggu sebelum meninggalkan percubaan untuk membuat sambungan ke pelayan. Nilai lalai bergantung pada pemacu. </li></ul>Parameter rekod ditentukan sebagai [option1 = value1, option2 = value2...].


