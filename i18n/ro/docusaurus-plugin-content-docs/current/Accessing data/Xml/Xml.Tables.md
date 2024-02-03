---
title: Xml.Tables
---

# Xml.Tables


## Description

Returnează conţinutul documentului XML ca şi colecţie imbricată de tabele aplatizate.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Returnează conţinutul documentului XML ca şi colecţie imbricată de tabele aplatizate.


## Examples

### Example #1 
Regăsiți conținutul unui fișier xml local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
