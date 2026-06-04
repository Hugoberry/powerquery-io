---
title: Xml.Tables
---

# Xml.Tables


Vrne vsebino dokumenta XML kot ugnezdeno zbirko poenostavljenih tabel.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Vrne vsebino dokumenta XML kot ugnezdeno zbirko poenostavljenih tabel.


## Examples

### Example #1
Pridobite vsebino lokalne datoteke XML.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
