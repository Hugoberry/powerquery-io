---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Membuat fungsi yang dapat dicegat oleh handler yang ditentukan pada tampilan (melalui Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Membuat fungsi tampilan berdasarkan <code>function</code> yang dapat ditangani dalam tampilan yang dibuat oleh <code>Table.View</code>.<br />Handler <code>OnInvoke</code> dari <code>Table.View</code> dapat digunakan untuk menentukan handler untuk fungsi tampilan.<br />Seperti halnya handler untuk operasi bawaan, jika tidak ada handler <code>OnInvoke</code> yang ditentukan, atau jika tidak menangani fungsi tampilan, atau jika kesalahan dimunculkan oleh handler, <code>function</code> diterapkan di atas tampilan.<br />Lihat dokumentasi konektor kustom Power Query yang diterbitkan untuk deskripsi yang lebih lengkap tentang <code>Table.View</code> dan fungsi tampilan kustom.<br />



## Category
Table.Table construction
