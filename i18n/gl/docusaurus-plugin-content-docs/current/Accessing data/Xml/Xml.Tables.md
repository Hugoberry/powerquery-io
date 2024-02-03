---
title: Xml.Tables
---

# Xml.Tables


## Description

Devolve o contido do documento XML como unha colección aniñada de táboas simplificadas.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Devolve o contido do documento XML como unha colección aniñada de táboas simplificadas.


## Examples

### Example #1 
Recuperar os contidos dun ficheiro xml local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
