---
title: Xml.Tables
---

# Xml.Tables


Vraća sadržaj XML dokumenta u vidu ugnežđene kolekcije ravnih tabela.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Vraća sadržaj XML dokumenta u vidu ugnežđene kolekcije ravnih tabela.


## Examples

### Example #1
Preuzmite sadržaj lokalne XML datoteke.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
