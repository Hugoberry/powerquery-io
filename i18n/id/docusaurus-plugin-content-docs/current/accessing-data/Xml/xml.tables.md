---
title: Xml.Tables
---

# Xml.Tables


Menghasilkan konten dokumen XML sebagai koleksi bersarang tabel yang diratakan.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Menghasilkan konten dokumen XML sebagai koleksi bersarang tabel yang diratakan.


## Examples

### Example #1
Ambil konten file XML lokal.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
