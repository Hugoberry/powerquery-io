---
title: Xml.Tables
---

# Xml.Tables


## Description

Vrne vsebino dokumenta XML kot ugnezdeno zbirko poenostavljenih tabel.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Vrne vsebino dokumenta XML kot ugnezdeno zbirko poenostavljenih tabel.


## Examples

### Example #1 
Pridobite vsebino lokalne datoteke xml.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
