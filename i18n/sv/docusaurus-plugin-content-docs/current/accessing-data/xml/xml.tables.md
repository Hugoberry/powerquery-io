---
title: Xml.Tables
---

# Xml.Tables


Returnerar innehållet i XML-dokumentet som en kapslad samling utplattade tabeller.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Returnerar innehållet i XML-dokumentet som en kapslad samling utplattade tabeller.


## Examples

### Example #1
Hämta innehållet i en lokal XML-fil.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
