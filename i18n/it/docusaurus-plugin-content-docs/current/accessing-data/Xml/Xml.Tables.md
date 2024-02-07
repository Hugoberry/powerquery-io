---
title: Xml.Tables
---

# Xml.Tables


Restituisce il contenuto del documento XML come raccolta annidata di tabelle rese flat.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

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
