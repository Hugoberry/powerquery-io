---
title: Xml.Tables
---

# Xml.Tables


Devolve o contido do documento XML como unha colección aniñada de táboas simplificadas.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Devolve o contido do documento XML como unha colección aniñada de táboas simplificadas.


## Examples

### Example #1
Recuperar o contido dun ficheiro XML local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
