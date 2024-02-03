---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Membuat fungsi yang dapat dicegat oleh handler yang ditentukan pada tampilan (melalui Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Membuat fungsi tampilan berdasarkan <code>function</code> yang dapat ditangani dalam tampilan yang dibuat oleh <code>Binary.View</code>.<br />Handler <code>OnInvoke</code> dari <code>Binary.View</code> dapat digunakan untuk menentukan handler untuk fungsi tampilan.<br />Seperti halnya handler untuk operasi bawaan, jika tidak ada handler <code>OnInvoke</code> yang ditentukan, atau jika handler tidak menangani fungsi tampilan, atau jika kesalahan dimunculkan oleh handler, <code>function</code> diterapkan di atas tampilan.<br />Lihat dokumentasi konektor kustom Power Query yang diterbitkan untuk deskripsi yang lebih lengkap tentang <code>Binary.View</code> dan fungsi tampilan kustom.<br />



## Category
Binary
