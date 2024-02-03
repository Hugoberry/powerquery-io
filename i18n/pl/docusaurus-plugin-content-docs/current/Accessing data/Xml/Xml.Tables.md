---
title: Xml.Tables
---

# Xml.Tables


## Description

Zwraca zawartość dokumentu w formacie XML jako zagnieżdżoną kolekcję spłaszczonych tabel.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Zwraca zawartość dokumentu w formacie XML jako zagnieżdżoną kolekcję spłaszczonych tabel.


## Examples

### Example #1 
Pobierz zawartość lokalnego pliku XML.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
