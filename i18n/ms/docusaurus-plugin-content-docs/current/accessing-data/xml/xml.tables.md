---
title: Xml.Tables
---

# Xml.Tables


Mengembalikan kandungan dokumen XML sebagai koleksi jadual diratakan tersarang.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Mengembalikan kandungan dokumen XML sebagai koleksi jadual diratakan tersarang.


## Examples

### Example #1
Dapatkan semula kandungan fail XML setempat.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
