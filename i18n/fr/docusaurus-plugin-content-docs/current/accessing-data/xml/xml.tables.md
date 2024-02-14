---
title: Xml.Tables
---

# Xml.Tables


Retourne le contenu du document XML comme une collection de tables imbriquées aplaties.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Retourne le contenu du document XML comme une collection de tables imbriquées aplaties.


## Examples

### Example #1 
Récupérez le contenu d’un fichier XML local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
