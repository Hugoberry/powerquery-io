---
title: Xml.Tables
---

# Xml.Tables


## Description

Devuelve el contenido del documento XML como una colección anidada de tablas sin formato.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Devuelve el contenido del documento XML como una colección anidada de tablas sin formato.


## Examples

### Example #1 
Recupere el contenido de un archivo XML local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
