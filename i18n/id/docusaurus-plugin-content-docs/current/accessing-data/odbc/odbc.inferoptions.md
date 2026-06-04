---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Mengembalikan hasil percobaan dalam menyimpulkan kemampuan SQL untuk driver ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Mengembalikan hasil percobaan dalam menyimpulkan kemampuan SQL dengan string koneksi `connectionString` menggunakan ODBC. `connectionString` bisa berupa teks atau catatan dari pasangan nilai properti. Nilai properti dapat berupa teks maupun angka.


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
