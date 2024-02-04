---
title: Xml.Tables
---

# Xml.Tables


## Description

Gibt den Inhalt des XML-Dokuments als geschachtelte Auflistung vereinfachter Tabellen zurück.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Gibt den Inhalt des XML-Dokuments als geschachtelte Auflistung vereinfachter Tabellen zurück.


## Examples

### Example #1 
Hiermit rufen Sie den Inhalt einer lokalen XML-Datei ab.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
