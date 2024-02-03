---
title: Xml.Tables
---

# Xml.Tables


## Description

Menghasilkan konten dokumen XML sebagai koleksi bersarang tabel yang diratakan.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Menghasilkan konten dokumen XML sebagai koleksi bersarang tabel yang diratakan.


## Examples

### Example #1 
Ambil konten file xml lokal.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
