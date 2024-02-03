---
title: Xml.Tables
---

# Xml.Tables


## Description

Palauttaa XML-tiedoston sisällön liitteiden taulukoiden sisäkkäisenä kokoelmana.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Palauttaa XML-tiedoston sisällön liitteiden taulukoiden sisäkkäisenä kokoelmana.


## Examples

### Example #1 
Nouda paikallisen XML-tiedoston sisältö.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
