---
title: Xml.Tables
---

# Xml.Tables


## Description

Retorna els continguts del document XML com a col·lecció imbricada de taules planes.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Retorna els continguts del document XML com a col·lecció imbricada de taules planes.


## Examples

### Example #1 
Recupereu el contingut d&#39;un fitxer XML local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
