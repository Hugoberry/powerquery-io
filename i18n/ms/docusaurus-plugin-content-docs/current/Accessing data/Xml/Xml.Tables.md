---
title: Xml.Tables
---

# Xml.Tables


## Description

Mengembalikan kandungan dokumen XML sebagai koleksi jadual diratakan tersarang.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Mengembalikan kandungan dokumen XML sebagai koleksi jadual diratakan tersarang.


## Examples

### Example #1 
Ambil kandungan fail xml setempat.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
