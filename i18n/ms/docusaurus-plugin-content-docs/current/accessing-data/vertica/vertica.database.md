---
title: Vertica.Database
---

# Vertica.Database


Import data daripada Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual skema yang tersedia pada pelayan yang dinamakan oleh parameter `pelayan` dalam pangkalan data yang dinamakan oleh parameter `pangkalan data`. Parameter rekod pilihan, `opsyen`, boleh diberikan untuk menentukan sifat tambahan. Rekod boleh mengandungi medan berikut:

-   `ConnectionTimeout`: Tempoh yang mengawal jangka masa menunggu sebelum meninggalkan percubaan untuk membuat sambungan dengan pelayan. Nilai lalai bergantung pada pemacu.
-   `CommandTimeout` : Tempoh yang mengawal jangka masa pertanyaan pihak pelayan dibenarkan untuk dijalankan sebelum dibatalkan. Nilai lalai bergantung pada pemacu.


## Examples

### Example #1
Senaraikan jadual dalam Vertica
```powerquery

```



