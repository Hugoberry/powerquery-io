---
title: Xml.Tables
---

# Xml.Tables


Returnează conţinutul documentului XML ca şi colecţie imbricată de tabele aplatizate.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Returnează conţinutul documentului XML ca şi colecţie imbricată de tabele aplatizate.


## Examples

### Example #1
Regăsiți conținutul unui fișier XML local.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
