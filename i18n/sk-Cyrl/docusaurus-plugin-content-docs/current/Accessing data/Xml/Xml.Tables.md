---
title: Xml.Tables
---

# Xml.Tables


## Description

Vráti obsah dokumentu XML ako vnorenú kolekciu tabuliek so zjednodušenou štruktúrou.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Vráti obsah dokumentu XML ako vnorenú kolekciu tabuliek so zjednodušenou štruktúrou.


## Examples

### Example #1 
Načítajte obsah lokálneho súboru xml.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
