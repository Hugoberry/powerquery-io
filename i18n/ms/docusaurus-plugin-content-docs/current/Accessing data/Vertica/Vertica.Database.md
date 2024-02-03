---
title: Vertica.Database
---

# Vertica.Database


## Description

Import data daripada Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Mengembalikan jadual skema yang tersedia pada pelayan yang dinamakan oleh parameter <code>pelayan</code> dalam pangkalan data yang dinamakan oleh parameter <code>pangkalan data</code>.Parameter rekod pilihan, <code>opsyen</code>, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:<ul>    <li><code>ConnectionTimeout</code>: Tempoh yang mengawal jangka masa menunggu sebelum meninggalkan percubaan untuk membuat sambungan dengan pelayan. Nilai lalai bergantung pada pemacu.</li>    <li><code>CommandTimeout </code>: Tempoh yang mengawal jangka masa pertanyaan pihak pelayan dibenarkan untuk dijalankan sebelum dibatalkan. Nilai lalai bergantung pada pemacu.</li></ul>


## Examples

### Example #1 
Senaraikan jadual dalam Vertica
```powerquery

```



