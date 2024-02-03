---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Mengembalikan hasil daripada percubaan mentaabir keupayaan SQL untuk pemacu ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Mengembalikan hasil daripada percubaan mentaabir keupayaan SQL dengan rentetan sambungan <code>connectionString</code> menggunakan ODBC. <code>connectionString</code> boleh jadi teks atau rekod pasangan nilai sifat. Nilai sifat boleh jadi teks atau nombor.


## Examples

### Example #1 
Kembalikan keupayaan SQL yang dirujuk untuk rentetan sambungan.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
