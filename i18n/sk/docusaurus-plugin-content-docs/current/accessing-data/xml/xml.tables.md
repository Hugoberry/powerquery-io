---
title: Xml.Tables
---

# Xml.Tables


Vráti obsah dokumentu XML ako vnorenú kolekciu tabuliek so zjednodušenou štruktúrou.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Vráti obsah dokumentu XML ako vnorenú kolekciu tabuliek so zjednodušenou štruktúrou.


## Examples

### Example #1
Načíta obsah lokálneho súboru XML.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
