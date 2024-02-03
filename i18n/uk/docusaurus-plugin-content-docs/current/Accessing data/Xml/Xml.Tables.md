---
title: Xml.Tables
---

# Xml.Tables


## Description

Повертає вміст XML-документа у вигляді вкладеної колекції таблиць, поданих у вигляді рядка.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Повертає вміст XML-документа у вигляді вкладеної колекції таблиць, поданих у вигляді рядка.


## Examples

### Example #1 
Отримайте вміст локального файлу XML.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
