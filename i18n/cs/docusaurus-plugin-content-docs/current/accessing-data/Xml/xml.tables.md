---
title: Xml.Tables
---

# Xml.Tables


Vrátí obsah dokumentu XML jako vnořenou kolekci plochých tabulek.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Vrátí obsah dokumentu XML jako vnořenou kolekci plochých tabulek.


## Examples

### Example #1
Načtěte obsah místního souboru XML.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
