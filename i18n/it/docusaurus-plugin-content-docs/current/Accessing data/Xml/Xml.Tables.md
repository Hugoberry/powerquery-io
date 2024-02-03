---
title: Xml.Tables
---

# Xml.Tables


## Description

Restituisce il contenuto del documento XML come raccolta annidata di tabelle rese flat.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Restituisce il contenuto del documento XML come raccolta annidata di tabelle rese flat.


## Examples

### Example #1 
Recupera il contenuto di un file XML locale.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
