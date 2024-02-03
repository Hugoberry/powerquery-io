---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Mengembalikan hasil percobaan dalam menyimpulkan kemampuan SQL untuk driver ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Mengembalikan hasil percobaan dalam menyimpulkan kemampuan SQL dengan string koneksi <code>connectionString</code> menggunakan ODBC. <code>connectionString</code> bisa berupa teks atau catatan dari pasangan nilai properti. Nilai properti dapat berupa teks maupun angka.


## Examples

### Example #1 
Menghasilkan kemampuan SQL yang disimpulkan untuk string koneksi.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
