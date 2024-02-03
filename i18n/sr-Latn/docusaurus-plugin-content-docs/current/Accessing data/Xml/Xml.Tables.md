---
title: Xml.Tables
---

# Xml.Tables


## Description

Vraća sadržaj XML dokumenta u vidu ugnežđene kolekcije ravnih tabela.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Vraća sadržaj XML dokumenta u vidu ugnežđene kolekcije ravnih tabela.


## Examples

### Example #1 
Preuzmite sadržaj lokalne xml datoteke.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
