---
title: Table.ViewFunction
---

# Table.ViewFunction


Membuat fungsi yang dapat dicegat oleh handler yang ditentukan pada tampilan (melalui Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Membuat fungsi tampilan berdasarkan `function` yang dapat ditangani dalam tampilan yang dibuat oleh `Table.View`.

Handler `OnInvoke` dari `Table.View` dapat digunakan untuk menentukan handler untuk fungsi tampilan.

Seperti halnya handler untuk operasi bawaan, jika tidak ada handler `OnInvoke` yang ditentukan, atau jika tidak menangani fungsi tampilan, atau jika kesalahan dimunculkan oleh handler, `function` diterapkan di atas tampilan.

Lihat dokumentasi konektor kustom Power Query yang diterbitkan untuk deskripsi yang lebih lengkap tentang `Table.View` dan fungsi tampilan kustom.



## Category
Table.Table construction
