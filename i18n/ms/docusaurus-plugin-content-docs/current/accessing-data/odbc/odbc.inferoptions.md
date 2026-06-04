---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Mengembalikan hasil daripada percubaan mentaabir keupayaan SQL untuk pemacu ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Mengembalikan hasil daripada percubaan mentaabir keupayaan SQL dengan rentetan sambungan `connectionString` menggunakan ODBC. `connectionString` boleh jadi teks atau rekod pasangan nilai sifat. Nilai sifat boleh jadi teks atau nombor.


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
