---
title: Xml.Tables
---

# Xml.Tables


Retourneert de inhoud van het XML-document als een geneste verzameling platgemaakte tabellen.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Retourneert de inhoud van het XML-document als een geneste verzameling platgemaakte tabellen.


## Examples

### Example #1 
Haal de inhoud van een lokaal XML-bestand op.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
