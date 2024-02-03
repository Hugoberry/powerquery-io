---
title: Xml.Tables
---

# Xml.Tables


## Description

Returnerer indholdet af XML-dokumentet som en indlejret samling flade tabeller.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Returnerer indholdet af XML-dokumentet som en indlejret samling flade tabeller.


## Examples

### Example #1 
Hent indholdet af en lokal xml-fil.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
